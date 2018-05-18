import * as debug from 'debug'
import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs'
import { from } from 'rxjs/observable/from'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/map'
import { combineEpics, createEpicMiddleware } from 'redux-observable'

import { BACKEND_URL } from '../config'
import { appName } from '../consts'
import { commonAjaxRequestSettings, commonAjaxODataRequestSettings, json } from '../utils'
import { getContactsFetchUrl } from '../services/contactService'
import {
  FETCH_CONTACTS, FETCH_CONTACTS_ABORT, requestContacts, receiveContacts, receiveContactsError,
  SET_CONTACTS_PROPS,
  REQUEST_CONTACT, receiveContact, receiveContactError,
  SAVE_CONTACT_REQUEST, saveContactDone, saveContactError,
  ADD_CONTACT, addContactDone, addContactError,
  DELETE_CONTACT, deleteContactDone, deleteContactError,
  LOGIN, logInDone, logInError,
  LOGOFF, logOffDone, logOffError
} from '../actions'
import { clientSideApolloClient, createApolloClient } from '../apollo'
import { findContactQry } from '../graphql/queries'

const logger = debug(appName + ':epics.js')
const apolloClient = clientSideApolloClient || createApolloClient()

const requestContactsEpic = action$ =>
  action$.ofType(FETCH_CONTACTS)
    .mergeMap(action =>
      ajax({
        ...commonAjaxODataRequestSettings,
        url: BACKEND_URL + '/odata/Contacts' + getContactsFetchUrl(
          action.payload.filterText,
          action.payload.skip,
          action.payload.take,
          true)
      })
        .map(response => {
          const resp = response.response
          return receiveContacts({ items: resp.value, count: resp['@odata.count'] })
        })
        .takeUntil(action$.ofType(FETCH_CONTACTS_ABORT))
        .catch(error => Observable.of(receiveContactsError(error)))
    )

const setContactsPropsEpic = (action$, store) =>
  action$.ofType(SET_CONTACTS_PROPS)
    .switchMap(action => {
      const { filterText, currentPage, itemsPerPage } = store.getState().contactsPage
      const skip = itemsPerPage * (currentPage - 1)
      const take = itemsPerPage
      return Observable.of(requestContacts(filterText, skip, take))
    })

const requestContactEpic = action$ =>
  action$.ofType(REQUEST_CONTACT)
    .mergeMap(action =>
      from(apolloClient.query({ query: findContactQry, variables: { id: action.id } }))
        .map((res) => {
          logger('requestContactEpic res', res)
          const { data: { contact } } = res
          return receiveContact(contact)
        })
        .catch(error => Observable.of(receiveContactError(error)))
    )

const saveContactEpic = action$ =>
  action$.ofType(SAVE_CONTACT_REQUEST)
    .mergeMap(action =>
      ajax({
        ...commonAjaxODataRequestSettings,
        url: BACKEND_URL + `/odata/Contacts('${action.payload._id}')`,
        method: 'PATCH',
        body: json(action.payload)
      })
        .map(response => saveContactDone(response.response))
        .catch(error => Observable.of(saveContactError(error)))
    )

const addContactEpic = action$ =>
  action$.ofType(ADD_CONTACT)
    .mergeMap(action =>
      ajax({
        ...commonAjaxODataRequestSettings,
        url: BACKEND_URL + `/odata/Contacts`,
        method: 'POST',
        body: json(action.payload)
      })
        .map(response => addContactDone(response.response))
        .catch(error => Observable.of(addContactError(error)))
    )

const deleteContactEpic = (action$, store) =>
  action$.ofType(DELETE_CONTACT)
    .mergeMap(action =>
      ajax({
        ...commonAjaxRequestSettings,
        url: BACKEND_URL + `/odata/Contacts('${action.payload.id}')`,
        method: 'DELETE',
      })
        .mergeMap(response => {
          const filterText = store.getState().contactsPage.filterText
          return Observable.concat(
            Observable.of(deleteContactDone()),
            Observable.of(requestContacts(filterText)))
        })
        .catch(error => Observable.of(deleteContactError(error)))
    )

const requestAuthenticateEpic = action$ =>
  action$.ofType(LOGIN)
    .mergeMap(action => ajax({
      ...commonAjaxRequestSettings,
      url: BACKEND_URL + '/account/logInWithCookie',
      method: 'POST',
      body: { login: action.login, password: action.password }
    })
      .map(response => logInDone(response.response))
      .catch(error => Observable.of(logInError(error)))
    );

const requestLogoffEpic = action$ =>
  action$.ofType(LOGOFF)
    .mergeMap(action => ajax({
      ...commonAjaxRequestSettings,
      url: BACKEND_URL + '/account/clearCookie',
      method: 'POST'
    })
      .map(response => logOffDone(response.response))
      .catch(error => Observable.of(logOffError(error)))
    );

const rootEpic = combineEpics(
  requestContactsEpic,
  setContactsPropsEpic,
  requestContactEpic,
  saveContactEpic,
  addContactEpic,
  deleteContactEpic,
  requestAuthenticateEpic,
  requestLogoffEpic
);

export const epicMiddleware = createEpicMiddleware(rootEpic);
