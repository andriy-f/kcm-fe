import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { commonAjaxRequestSettings } from '../utils'
import {
    REQUEST_AUTHENTICATE, REQUEST_CONTACTS,
    receiveContacts, receiveContactsError, receiveAuthenticate, receiveAuthenticateError
} from '../actions';

const requestContactsEpic = action$ =>
    action$.ofType(REQUEST_CONTACTS)
        .mergeMap(action =>
            ajax({
                ...commonAjaxRequestSettings,
                url: 'http://localhost:3000/odata/Contacts'
            })
                .map(response => receiveContacts(response.response.value))
                .catch(error => Observable.of(receiveContactsError(error)))
        );

const requestAuthenticateEpic = action$ =>
    action$.ofType(REQUEST_AUTHENTICATE)
        .mergeMap(action => ajax({
            ...commonAjaxRequestSettings,
            url: 'http://localhost:3000/authenticate',
            method: 'POST',
            body: { login: action.login, password: action.password }
        })
            .map(response => receiveAuthenticate(response.response))
            .catch(error => Observable.of(receiveAuthenticateError(error.xhr.response)))
        );

const rootEpic = combineEpics(
    requestContactsEpic,
    requestAuthenticateEpic
);

export const epicMiddleware = createEpicMiddleware(rootEpic);