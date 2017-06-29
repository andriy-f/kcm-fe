// State sample
// ...

import { combineReducers } from 'redux';
import * as jwt_decode from 'jwt-decode';

import {
    RECEIVE_CONTACTS, RECEIVE_CONTACTS_ERROR,
    RECEIVE_AUTHENTICATE, RECEIVE_AUTHENTICATE_ERROR,
    RECEIVE_LOGOFF, RECEIVE_LOGOFF_ERROR
} from './actions';

function contactsPage(state = {}, action) {
    switch (action.type) {
        case RECEIVE_CONTACTS:
            return { items: action.payload }
        case RECEIVE_CONTACTS_ERROR:
            return { error: action.payload }
        default:
            return state;
    }
}

const currentUser = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_AUTHENTICATE:
            let respData = action.payload;
            return jwt_decode(respData.token);
        default:
            return state;
    }
}

const authenticationPage = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_AUTHENTICATE:
            return { response: action.payload };
        case RECEIVE_AUTHENTICATE_ERROR:
            return { error: action.payload };
        default:
            return state;
    }
}

const logoffPage = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_LOGOFF:
            return { response: action.payload };
        case RECEIVE_LOGOFF_ERROR:
            return { error: action.payload };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    currentUser,
    authenticationPage,
    logoffPage,
    contactsPage
})

export default rootReducer