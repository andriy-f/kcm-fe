// State sample
// ...

import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import { switchcase } from './utils'
import {
    FETCH_CONTACTS, FETCH_CONTACTS_DONE, FETCH_CONTACTS_ERROR, CLEAR_CONTACT_LIST, 
    SET_CONTACTS_PROPS,
    RECEIVE_CONTACT, RECEIVE_CONTACT_ERROR,
    SAVE_CONTACT_DONE, SAVE_CONTACT_ERROR, CLEAR_CONTACT,
    ADD_CONTACT_DONE, ADD_CONTACT_ERROR, CLEAR_ADD_CONTACT_PAGE,
    CONFIRM_DELETE_CONTACT, CANCEL_DELETE_CONTACT,
    DELETE_CONTACT_DONE, DELETE_CONTACT_ERROR,
    LOGIN, LOGIN_DONE, LOGIN_ERROR, LOGIN_CLEANUP,
    LOGOFF_DONE, LOGOFF_ERROR,
    TOGGLE_SETTING, SET_SETTING
} from './actions'

const defaultContactsPageState = {
    items: [], // filtered "paged" items. Received from backend
    totalItems: undefined, // total number of items after filtering, but not taking into account paging, (received from backend)
    filterText: '', // from page
    currentPage: 1, totalPages: 1, itemsPerPage: 10, // from page
    isFetching: false
}

function contactsPage(state = defaultContactsPageState, action) {
    const payload = action.payload

    switch (action.type) {
        case FETCH_CONTACTS:
            return { ...state, isFetching: true }
        case FETCH_CONTACTS_DONE:
            const totalPages = payload.count > 0 ? Math.ceil(payload.count / state.itemsPerPage): 1
            return {
                ...state,
                items: payload.items,
                totalItems: payload.count,
                totalPages,
                error: null,
                isFetching: false
            }
        case FETCH_CONTACTS_ERROR:
            return { ...state, items: [], error: payload, isFetching: false }
        case CLEAR_CONTACT_LIST:
            return defaultContactsPageState
        case SET_CONTACTS_PROPS:
        case DELETE_CONTACT_DONE:
        case DELETE_CONTACT_ERROR:
        case CONFIRM_DELETE_CONTACT:
        case CANCEL_DELETE_CONTACT:
            return { ...state, ...payload }
        default:
            return state
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
        case LOGIN_DONE:
            let respData = action.payload;
            return {
                ...respData.userData,
                tokenExpiresOn: action.payload.tokenExpiresOn
            }
        case LOGOFF_DONE:
            return {};
        default:
            return state;
    }
}

const logInDefaultState = { isFetching: false }
const logIn = (state = logInDefaultState, action) => switchcase({
    [LOGIN]: { isFetching: true },
    [LOGIN_DONE]: { response: { success: true }, isFetching: false },
    [LOGIN_ERROR]: () => ({ error: action.payload, isFetching: false }),
    [LOGIN_CLEANUP]: logInDefaultState
})(state)(action.type)

const logoffPage = (state = {}, action) => {
    switch (action.type) {
        case LOGOFF_DONE:
            return { response: action.payload };
        case LOGOFF_ERROR:
            return { error: action.payload };
        default:
            return state;
    }
}

const settings = (state = {
    bodyScrolled: false,
    sideNavActive: false,
    sideNavPinned: false,
    sideNavClipped: false,
    rightSideNavActive: false,
    rightSideNavPinned: false,
    rightSideNavClipped: true
}, action) => {
    switch (action.type) {
        case TOGGLE_SETTING:
            let name = action.payload.name
            let oldSettingValue = state[name]
            return { ...state, [name]: !oldSettingValue }
        case SET_SETTING:
            return { ...state, [action.payload.name]: action.payload.value }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    currentUser,
    contactEdit,
    addContactPage,
    logIn,
    logoffPage,
    contactsPage,
    settings,
    form: formReducer
})

export default rootReducer