import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'
import { combineEpics, createEpicMiddleware } from 'redux-observable'

import { BACKEND_URL } from '../config'
import { commonAjaxRequestSettings, commonAjaxODataRequestSettings, json } from '../utils'
import { getContactsFetchUrl } from '../services/contactService'
import {
    FETCH_CONTACTS, FETCH_CONTACTS_ABORT, requestContacts, receiveContacts, receiveContactsError,
    REQUEST_CONTACT, receiveContact, receiveContactError,
    SAVE_CONTACT_REQUEST, saveContactDone, saveContactError,
    ADD_CONTACT, addContactDone, addContactError,
    DELETE_CONTACT, deleteContactDone, deleteContactError,
    LOGIN, logInDone, logInError,
    LOGOFF, logOffDone, logOffError
} from '../actions'


const requestContactsEpic = action$ =>
    action$.ofType(FETCH_CONTACTS)
        .mergeMap(action =>
            ajax({
                ...commonAjaxODataRequestSettings,
                url: BACKEND_URL + '/odata/Contacts' + getContactsFetchUrl(action.payload.filterText)
            })
            .map(response => receiveContacts(response.response.value))
            .takeUntil(action$.ofType(FETCH_CONTACTS_ABORT))
            .catch(error => Observable.of(receiveContactsError(error)))
        )

const requestContactEpic = action$ =>
    action$.ofType(REQUEST_CONTACT)
        .mergeMap(action =>
            ajax({
                ...commonAjaxODataRequestSettings,
                url: BACKEND_URL + `/odata/Contacts('${action.id}')`
            })
                .map(response => receiveContact(response.response))
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
    requestContactEpic,
    saveContactEpic,
    addContactEpic,
    deleteContactEpic,
    requestAuthenticateEpic,
    requestLogoffEpic
);

export const epicMiddleware = createEpicMiddleware(rootEpic);