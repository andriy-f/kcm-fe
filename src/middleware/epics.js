import { ajax } from 'rxjs/observable/dom/ajax';
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { REQUEST_AUTHENTICATE, REQUEST_CONTACTS, receiveContacts, receiveAuthenticate } from '../actions';

const requestContactsEpic = action$ =>
    action$.ofType(REQUEST_CONTACTS)
        .mergeMap(action => {
            return ajax.getJSON('http://localhost:3000/odata/Contacts')
                .map(response => receiveContacts(response.value))
        });

const requestAuthenticateEpic = action$ =>
    action$.ofType(REQUEST_AUTHENTICATE)
        .mergeMap(action => {
            return ajax.post('http://localhost:3000/authenticate',
                { login: action.login, password: action.password })
                .map(response => receiveAuthenticate(response.response))
        });

const rootEpic = combineEpics(
    requestContactsEpic,
    requestAuthenticateEpic
);

export const epicMiddleware = createEpicMiddleware(rootEpic);