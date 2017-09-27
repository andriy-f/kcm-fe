// Convention:

// ACTION_REQUEST or ACTION
// ACTION_RECEIVED or ACTION_FULLFILLED or ACTION_DONE
// ACTION_ERROR or ACTION_REJECTED
// ACTION_CANCEL

// ACTION - FETCH_USER

export const FETCH_CONTACTS = 'FETCH_CONTACTS'
export const FETCH_CONTACTS_DONE = 'FETCH_CONTACTS_DONE'
export const FETCH_CONTACTS_ABORT = 'FETCH_CONTACTS_ABORT'
export const FETCH_CONTACTS_ERROR = 'FETCH_CONTACTS_ERROR'
export const CLEAR_CONTACT_LIST = 'CLEAR_CONTACT_LIST'
export const SET_CONTACTS_FILTER_TEXT = 'SET_CONTACTS_FILTER_TEXT'

export const REQUEST_CONTACT = 'REQUEST_CONTACT'
export const RECEIVE_CONTACT = 'RECEIVE_CONTACT'
export const RECEIVE_CONTACT_ERROR = 'RECEIVE_CONTACT_ERROR'

export const SAVE_CONTACT_REQUEST = 'SAVE_CONTACT_REQUEST'
export const SAVE_CONTACT_DONE = 'SAVE_CONTACT_DONE'
export const SAVE_CONTACT_ERROR = 'SAVE_CONTACT_ERROR'
export const CLEAR_CONTACT = 'CLEAR_CONTACT'

export const ADD_CONTACT = 'ADD_CONTACT'
export const ADD_CONTACT_DONE = 'ADD_CONTACT_DONE'
export const ADD_CONTACT_ERROR = 'ADD_CONTACT_ERROR'
export const CLEAR_ADD_CONTACT_PAGE = 'CLEAR_ADD_CONTACT_PAGE'

export const DELETE_CONTACT = 'DELETE_CONTACT'
export const DELETE_CONTACT_DONE = 'DELETE_CONTACT_DONE'
export const DELETE_CONTACT_ERROR = 'DELETE_CONTACT_ERROR'

export const CONFIRM_DELETE_CONTACT = 'CONFIRM_DELETE_CONTACT'
export const CANCEL_DELETE_CONTACT = 'CANCEL_DELETE_CONTACT'

export const LOGIN = 'LOGIN'
export const LOGIN_DONE = 'LOGIN_DONE'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export const LOGOFF = 'LOGOFF'
export const LOGOFF_DONE = 'LOGOFF_DONE'
export const LOGOFF_ERROR = 'LOGOFF_ERROR'

export const TOGGLE_SETTING = 'TOGGLE_SETTING'
export const SET_SETTING = 'SET_SETTING'

export const requestContacts = (filterText) => ({
    type: FETCH_CONTACTS,
    payload: { filterText }
});

export const clearContactList = () => ({
    type: CLEAR_CONTACT_LIST
})

export const receiveContacts = (payload) => ({
    type: FETCH_CONTACTS_DONE,
    payload
})

export const abortFetchContacts = () => ({
    type: FETCH_CONTACTS_ABORT,
})

export const receiveContactsError = (payload) => ({
    type: FETCH_CONTACTS_ERROR,
    payload,
    error: true
})

export const setContactsFilterText = filterText => ({
    type: SET_CONTACTS_FILTER_TEXT,
    payload: { filterText }
})

export const requestContact = (id) => ({
    type: REQUEST_CONTACT,
    id
})

export const receiveContact = (payload) => ({
    type: RECEIVE_CONTACT,
    payload
})

export const receiveContactError = (payload) => ({
    type: RECEIVE_CONTACT_ERROR,
    payload,
    error: true
})

export const saveContactRequest = (payload) => ({
    type: SAVE_CONTACT_REQUEST,
    payload
})

export const saveContactDone = (payload) => ({
    type: SAVE_CONTACT_DONE,
    payload
})

export const saveContactError = (payload) => ({
    type: SAVE_CONTACT_ERROR,
    payload,
    error: true
})

export const addContact = (payload) => ({
    type: ADD_CONTACT,
    payload
})

export const addContactDone = (payload) => ({
    type: ADD_CONTACT_DONE,
    payload
})

export const addContactError = (payload) => ({
    type: ADD_CONTACT_ERROR,
    payload,
    error: true
})

export const clearAddContactPage = () => ({
    type: CLEAR_ADD_CONTACT_PAGE
})

export const clearContact = () => ({
    type: CLEAR_CONTACT,
})

export const deleteContact = (id) => ({
    type: DELETE_CONTACT,
    payload: { id }
})

export const deleteContactDone = () => ({
    type: DELETE_CONTACT_DONE,
    payload: { contactToDeleteId: null }
})

export const deleteContactError = (error) => ({
    type: DELETE_CONTACT_ERROR,
    payload: { error: error },
    error: true
})

export const confirmDeleteContact = (id) => ({
    type: CONFIRM_DELETE_CONTACT,
    payload: { contactToDeleteId: id }
})

export const cancelDeleteContact = () => ({
    type: CANCEL_DELETE_CONTACT,
    payload: { contactToDeleteId: null }
})

export const logIn = (login, password) => ({
    type: LOGIN,
    login,
    password
});

export const logInDone = (payload) => ({
    type: LOGIN_DONE,
    payload
});

export const logInError = (payload) => ({
    type: LOGIN_ERROR,
    payload,
    error: true
});


export const logOff = () => ({
    type: LOGOFF
});

export const logOffDone = (payload) => ({
    type: LOGOFF_DONE,
    payload
});

export const logOffError = (payload) => ({
    type: LOGOFF_ERROR,
    payload,
    error: true
})

export const toggleSetting = (payload) => ({
    type: TOGGLE_SETTING,
    payload
})

export const setSetting = (name, value) => ({
    type: SET_SETTING,
    payload: { name, value }
})