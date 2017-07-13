// State sample
// ...

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import {
    RECEIVE_CONTACTS, RECEIVE_CONTACTS_ERROR,
    RECEIVE_CONTACT, RECEIVE_CONTACT_ERROR,
    RECEIVE_LOGIN, RECEIVE_LOGIN_ERROR,
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

const contactEdit = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_CONTACT:
            return { data: action.payload }
        case RECEIVE_CONTACT_ERROR:
            return { error: action.payload }
        default:
            return state;
    }
}
const currentUser = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_LOGIN:
            let respData = action.payload;
            return {
                ...respData.userData,
                tokenExpiresOn: action.payload.tokenExpiresOn
            }
        case RECEIVE_LOGOFF:
            return {};
        default:
            return state;
    }
}

const authenticationPage = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_LOGIN:
            return { response: { success: true } };
        case RECEIVE_LOGIN_ERROR:
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
    contactEdit,
    authenticationPage,
    logoffPage,
    contactsPage,
    form: formReducer
})

export default rootReducer