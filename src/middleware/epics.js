import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { BACKEND_URL } from '../config'
import { commonAjaxRequestSettings } from '../utils'
import {
    REQUEST_CONTACTS, receiveContacts, receiveContactsError,
    REQUEST_LOGIN, receiveAuthenticate, receiveAuthenticateError,
    REQUEST_LOGOFF, receiveLogoff, receiveLogoffError
} from '../actions';

const requestContactsEpic = action$ =>
    action$.ofType(REQUEST_CONTACTS)
        .mergeMap(action =>
            ajax({
                ...commonAjaxRequestSettings,
                url: BACKEND_URL + '/odata/Contacts'
            })
                .map(response => receiveContacts(response.response.value))
                .catch(error => Observable.of(receiveContactsError(error)))
        );

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
    requestAuthenticateEpic,
    requestLogoffEpic
);

export const epicMiddleware = createEpicMiddleware(rootEpic);