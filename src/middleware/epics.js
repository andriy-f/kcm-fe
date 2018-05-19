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
import { clientSideApolloClient, createApolloClient } from '../graphql/apollo'
import { findContactsWithCountQry, findContactQry, createContactQry } from '../graphql/queries'

const logger = debug(appName + ':epics.js')
const apolloClient = clientSideApolloClient || createApolloClient()

const requestContactsEpic = action$ =>
  action$.ofType(FETCH_CONTACTS)
    .switchMap((action) => {
      const { filterText, skip, take } = action.payload
      return from(apolloClient.query({
        query: findContactsWithCountQry,
        variables: {
          skip, limit: take,
          filterText,
        }
      }))
        .map((res) => {
          logger('requestContacts epic res', res)
          const { data: { contacts, contactCount } } = res
          return receiveContacts({ items: contacts, count: contactCount })
        })
        .takeUntil(action$.ofType(FETCH_CONTACTS_ABORT))
        .catch(error => Observable.of(receiveContactsError(error)))
    })

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
    .switchMap(action =>
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
    .mergeMap(action => {
      const { firstName, lastName, phoneNumber, email } = action.payload
      return from(apolloClient.mutate({
        mutation: createContactQry,
        variables: { contact: { _id: action.id, firstName, lastName, email, phoneNumber } }
      }))
        .map(response => addContactDone(response.response))
        .catch(error => Observable.of(addContactError(error)))
    })

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
