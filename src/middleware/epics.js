import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'
import { combineEpics, createEpicMiddleware } from 'redux-observable'

import { BACKEND_URL } from '../config'
import { commonAjaxRequestSettings, json } from '../utils'
import { factory as ctxFactory } from '../services/JayContext'
import {
    REQUEST_CONTACTS, receiveContacts, receiveContactsError,
    REQUEST_CONTACT, receiveContact, receiveContactError,
    SAVE_CONTACT_REQUEST, saveContactDone, saveContactError,
    REQUEST_LOGIN, receiveAuthenticate, receiveAuthenticateError,
    REQUEST_LOGOFF, receiveLogoff, receiveLogoffError
} from '../actions'

const dataContextPromise = ctxFactory().onReady()

const requestContactsEpic = action$ =>
    action$.ofType(REQUEST_CONTACTS)
        .mergeMap(action =>
            Observable.fromPromise(dataContextPromise.then(ctx => ctx.Contacts.toArray()))
                .map(response => receiveContacts(response))
                .catch(error => Observable.of(receiveContactsError(error)))
        )

const requestContactEpic = action$ =>
    action$.ofType(REQUEST_CONTACT)
        .mergeMap(action =>
            ajax({
                ...commonAjaxRequestSettings,
                url: BACKEND_URL + `/odata/Contacts('${action.id}')`
            })
                .map(response => receiveContact(response.response))
                .catch(error => Observable.of(receiveContactError(error)))
        )

const saveContactEpic = action$ =>
    action$.ofType(SAVE_CONTACT_REQUEST)
        .mergeMap(action =>
            ajax({
                ...commonAjaxRequestSettings,
                headers: { 'Content-Type': 'application/json' },
                url: BACKEND_URL + `/odata/Contacts('${action.payload._id}')`,
                method: 'PATCH',
                body: json(action.payload)
            })
                .map(response => saveContactDone(response.response))
                .catch(error => Observable.of(saveContactError(error)))
        )

const requestAuthenticateEpic = action$ =>
    action$.ofType(REQUEST_LOGIN)
        .mergeMap(action => ajax({
            ...commonAjaxRequestSettings,
            url: BACKEND_URL + '/account/logInWithCookie',
            method: 'POST',
            body: { login: action.login, password: action.password }
        })
            .map(response => receiveAuthenticate(response.response))
            .catch(error => Observable.of(receiveAuthenticateError(error)))
        );

const requestLogoffEpic = action$ =>
    action$.ofType(REQUEST_LOGOFF)
        .mergeMap(action => ajax({
            ...commonAjaxRequestSettings,
            url: BACKEND_URL + '/account/clearCookie',
            method: 'POST'
        })
            .map(response => receiveLogoff(response.response))
            .catch(error => Observable.of(receiveLogoffError(error)))
        );

const rootEpic = combineEpics(
    requestContactsEpic,
    requestContactEpic,
    saveContactEpic,
    requestAuthenticateEpic,
    requestLogoffEpic
);

export const epicMiddleware = createEpicMiddleware(rootEpic);