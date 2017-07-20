// State sample
// ...

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import {
    FETCH_CONTACTS_DONE, FETCH_CONTACTS_ERROR, CLEAR_CONTACT_LIST,
    RECEIVE_CONTACT, RECEIVE_CONTACT_ERROR,
    SAVE_CONTACT_DONE, SAVE_CONTACT_ERROR, CLEAR_CONTACT,
    RECEIVE_LOGIN, RECEIVE_LOGIN_ERROR,
    RECEIVE_LOGOFF, RECEIVE_LOGOFF_ERROR,
    TOGGLE_SETTING
} from './actions';

function contactsPage(state = {}, action) {
    switch (action.type) {
        case FETCH_CONTACTS_DONE:
            return { items: action.payload }
        case FETCH_CONTACTS_ERROR:
            return { error: action.payload }
        case CLEAR_CONTACT_LIST:
            return {}
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
        case SAVE_CONTACT_DONE:
            return { ...state, justSaved: true }
        case SAVE_CONTACT_ERROR:
            return { ...state, error: action.payload }
        case CLEAR_CONTACT:
            return {}
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

const settings = (state = {
    bodyScrolled: false,
    sideNavActive: false,
    sideNavPinned: false,
    sideNavClipped: true,
    rightSideNavActive: false,
    rightSideNavPinned: false,
    rightSideNavClipped: true
}, action) => {
    switch (action.type) {
        case TOGGLE_SETTING:
            let name = action.payload.name
            let oldSettingValue = state[name]
            return { ...state, [name]: !oldSettingValue }
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
    settings,
    form: formReducer
})

export default rootReducer