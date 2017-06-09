import { ajax } from 'rxjs/observable/dom/ajax';
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { REQUEST_CONTACTS, receiveContacts } from '../actions';

const requestContactsEpic = action$ =>
    action$.ofType(REQUEST_CONTACTS)
        .mergeMap(action => {
            return ajax.getJSON('http://localhost:3000/odata/Contacts')
                .map(response => receiveContacts(response.value))
        }
        );

const rootEpic = combineEpics(
    requestContactsEpic
);

export const epicMiddleware = createEpicMiddleware(rootEpic);