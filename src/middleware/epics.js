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
import { commonAjaxRequestSettings } from '../utils'
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
import { getClient } from '../graphql/apollo'
import {
  findContactsWithCountQry, findContactQry,
  createContactQry, updateContactQry, deleteContactQry
} from '../graphql/queries'
import { urlJoin } from '../utils'

// eslint-disable-next-line
const logger = debug(appName + ':epics.js')
const loginUrl = urlJoin(BACKEND_URL, '/account/logInWithCookie')
const logoutUrl = urlJoin(BACKEND_URL, '/account/clearCookie')

const requestContactsEpic = action$ =>
  action$.ofType(FETCH_CONTACTS)
    .switchMap((action) => {
      const { filterText, skip, take } = action.payload
      return from(getClient().query({
        query: findContactsWithCountQry,
        variables: {
          skip, limit: take,
          filterText,
        },
        fetchPolicy: 'network-only',
      }))
        .map((res) => {
          const { data: { contacts, contactCount } } = res
          return receiveContacts({ items: contacts, count: contactCount })
        })
        .takeUntil(action$.ofType(FETCH_CONTACTS_ABORT))
        .catch((error) => {
          logger('get contacts error', error)
          return Observable.of(receiveContactsError(error))
        })
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
      from(getClient().query({
        query: findContactQry,
        variables: { id: action.id },
        fetchPolicy: 'network-only',
      }))
        .map((res) => {
          const { data: { contact } } = res
          return receiveContact(contact)
        })
        .catch(error => Observable.of(receiveContactError(error)))
    )

const saveContactEpic = action$ =>
  action$.ofType(SAVE_CONTACT_REQUEST)
    .mergeMap(action => {
      const { _id, firstName, lastName, phoneNumber, email } = action.payload
      return from(getClient().mutate({
        mutation: updateContactQry,
        variables: { id: _id, contact: { firstName, lastName, email, phoneNumber } }
      }))
        .map(response => saveContactDone(response.response))
        .catch(error => Observable.of(saveContactError(error)))
    })

const addContactEpic = action$ =>
  action$.ofType(ADD_CONTACT)
    .mergeMap(action => {
      const { firstName, lastName, phoneNumber, email } = action.payload
      return from(getClient().mutate({
        mutation: createContactQry,
        variables: { contact: { _id: action.id, firstName, lastName, email, phoneNumber } },
        update: (cache, { data }) => {
          getClient().resetStore()
        },
      }))
        .map(response => addContactDone(response))
        .catch(error => Observable.of(addContactError(error)))
    })

const deleteContactEpic = (action$, store) =>
  action$.ofType(DELETE_CONTACT)
    .mergeMap(action => {
      const { id } = action.payload
      return from(getClient().mutate({
        mutation: deleteContactQry,
        variables: { id },
        update: (cache, { data }) => {
          getClient().resetStore()
        },
      }))
        .mergeMap(response => {
          const contactsPage = store.getState().contactsPage
          const { filterText, currentPage, itemsPerPage } = contactsPage
          const skip = itemsPerPage * (currentPage - 1)
          const take = itemsPerPage
          return Observable.concat(
            Observable.of(deleteContactDone()),
            Observable.of(requestContacts(filterText, skip, take))
          )
        })
        .catch(error => Observable.of(deleteContactError(error)))
    })

const requestAuthenticateEpic = action$ =>
  action$.ofType(LOGIN)
    .mergeMap(action => ajax({
      ...commonAjaxRequestSettings,
      url: loginUrl,
      method: 'POST',
      body: { login: action.login, password: action.password },
    })
      .map(response => logInDone(response.response))
      .catch((error) => {
        logger('Login Error', error)
        return Observable.of(logInError(error))
      })
    )

const requestLogoffEpic = action$ =>
  action$.ofType(LOGOFF)
    .mergeMap(action => ajax({
      ...commonAjaxRequestSettings,
      url: logoutUrl,
      method: 'POST'
    })
      .map(response => logOffDone(response.response))
      .catch(error => Observable.of(logOffError(error)))
    )

const rootEpic = combineEpics(
  requestContactsEpic,
  setContactsPropsEpic,
  requestContactEpic,
  saveContactEpic,
  addContactEpic,
  deleteContactEpic,
  requestAuthenticateEpic,
  requestLogoffEpic
)

export const epicMiddleware = createEpicMiddleware(rootEpic)
