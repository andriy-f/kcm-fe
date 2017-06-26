import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import {
    REQUEST_AUTHENTICATE, REQUEST_CONTACTS,
    receiveContacts, receiveAuthenticate, receiveAuthenticateError
} from '../actions';

const requestContactsEpic = action$ =>
    action$.ofType(REQUEST_CONTACTS)
        .mergeMap(action => ajax.getJSON('http://localhost:3000/odata/Contacts')
            .map(response => receiveContacts(response.value))
        );

const requestAuthenticateEpic = action$ =>
    action$.ofType(REQUEST_AUTHENTICATE)
        .mergeMap(action => ajax({
            url: 'http://localhost:3000/authenticate',
            crossDomain: true,
            withCredentials: true,
            method: 'POST',
            responseType: 'json',
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