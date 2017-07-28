// Convention:

// ACTION_REQUEST or ACTION
// ACTION_RECEIVED or ACTION_FULLFILLED or ACTION_DONE
// ACTION_ERROR or ACTION_REJECTED
// ACTION_CANCEL

// ACTION - FETCH_USER

export const FETCH_CONTACTS = 'FETCH_CONTACTS'
export const FETCH_CONTACTS_DONE = 'FETCH_CONTACTS_DONE'
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

export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN'
export const RECEIVE_LOGIN_ERROR = 'RECEIVE_LOGIN_ERROR'

export const REQUEST_LOGOFF = 'REQUEST_LOGOFF'
export const RECEIVE_LOGOFF = 'RECEIVE_LOGOFF'
export const RECEIVE_LOGOFF_ERROR = 'RECEIVE_LOGOFF_ERROR'

export const TOGGLE_SETTING = 'TOGGLE_SETTING'

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
});

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

export const requestAuthenticate = (login, password) => ({
    type: REQUEST_LOGIN,
    login,
    password
});

export const receiveAuthenticate = (payload) => ({
    type: RECEIVE_LOGIN,
    payload
});

export const receiveAuthenticateError = (payload) => ({
    type: RECEIVE_LOGIN_ERROR,
    payload,
    error: true
});


export const requestLogoff = () => ({
    type: REQUEST_LOGOFF
});

export const receiveLogoff = (payload) => ({
    type: RECEIVE_LOGOFF,
    payload
});

export const receiveLogoffError = (payload) => ({
    type: RECEIVE_LOGOFF_ERROR,
    payload,
    error: true
})

export const toggleSetting = (payload) => ({
    type: TOGGLE_SETTING,
    payload
})