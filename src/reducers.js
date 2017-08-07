// State sample
// ...

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import {
    FETCH_CONTACTS, FETCH_CONTACTS_DONE, FETCH_CONTACTS_ERROR, CLEAR_CONTACT_LIST, SET_CONTACTS_FILTER_TEXT,
    RECEIVE_CONTACT, RECEIVE_CONTACT_ERROR,
    SAVE_CONTACT_DONE, SAVE_CONTACT_ERROR, CLEAR_CONTACT,
    ADD_CONTACT_DONE, ADD_CONTACT_ERROR, CLEAR_ADD_CONTACT_PAGE,
    CONFIRM_DELETE_CONTACT, CANCEL_DELETE_CONTACT,
    DELETE_CONTACT_DONE, DELETE_CONTACT_ERROR,
    REQUEST_LOGIN, RECEIVE_LOGIN, RECEIVE_LOGIN_ERROR,
    RECEIVE_LOGOFF, RECEIVE_LOGOFF_ERROR,
    TOGGLE_SETTING,
} from './actions';

const defaultContactsPageState = { items: [], filterText: '', isFetching: false }
function contactsPage(state = defaultContactsPageState, action) {
    const payload = action.payload

    switch (action.type) {
        case FETCH_CONTACTS:
            return { ...state, isFetching: true }
        case FETCH_CONTACTS_DONE:
            return { ...state, items: payload, error: null, isFetching: false }
        case FETCH_CONTACTS_ERROR:
            return { ...state, items: [], error: payload, isFetching: false }
        case CLEAR_CONTACT_LIST:
            return defaultContactsPageState
        case SET_CONTACTS_FILTER_TEXT:
        case DELETE_CONTACT_DONE:
        case DELETE_CONTACT_ERROR:
        case CONFIRM_DELETE_CONTACT:
        case CANCEL_DELETE_CONTACT:
            return { ...state, ...payload }
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

const addContactPage = (state = {}, action) => {
    switch (action.type) {
        case ADD_CONTACT_DONE:
            return { ...state, justSaved: true }
        case ADD_CONTACT_ERROR:
            return { ...state, error: action.payload }
        case CLEAR_ADD_CONTACT_PAGE:
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

const authenticationPage = (state = { isFetching: false }, action) => {
    switch (action.type) {
        case REQUEST_LOGIN:
            return { isFetching: true }
        case RECEIVE_LOGIN:
            return { response: { success: true }, isFetching: false };
        case RECEIVE_LOGIN_ERROR:
            return { error: action.payload, isFetching: false };
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
    addContactPage,
    authenticationPage,
    logoffPage,
    contactsPage,
    settings,
    form: formReducer
})

export default rootReducer