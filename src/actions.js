// Convention:

// ACTION_REQUEST or ACTION
// ACTION_RECEIVED or ACTION_FULLFILLED or ACTION_DONE
// ACTION_ERROR or ACTION_REJECTED
// ACTION_CANCEL

// ACTION - FETCH_USER

export const REQUEST_CONTACTS = 'REQUEST_CONTACTS'
export const RECEIVE_CONTACTS = 'RECEIVE_CONTACTS'
export const RECEIVE_CONTACTS_ERROR = 'RECEIVE_CONTACTS_ERROR'
export const CLEAR_CONTACT_LIST = 'CLEAR_CONTACT_LIST'

export const REQUEST_CONTACT = 'REQUEST_CONTACT'
export const RECEIVE_CONTACT = 'RECEIVE_CONTACT'
export const RECEIVE_CONTACT_ERROR = 'RECEIVE_CONTACT_ERROR'

export const SAVE_CONTACT_REQUEST = 'SAVE_CONTACT_REQUEST'
export const SAVE_CONTACT_DONE = 'SAVE_CONTACT_DONE'
export const SAVE_CONTACT_ERROR = 'SAVE_CONTACT_ERROR'
export const CLEAR_CONTACT = 'CLEAR_CONTACT'

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';
export const RECEIVE_LOGIN_ERROR = 'RECEIVE_LOGIN_ERROR';

export const REQUEST_LOGOFF = 'REQUEST_LOGOFF';
export const RECEIVE_LOGOFF = 'RECEIVE_LOGOFF';
export const RECEIVE_LOGOFF_ERROR = 'RECEIVE_LOGOFF_ERROR';

export const requestContacts = (payload) => ({
    type: REQUEST_CONTACTS,
    payload
});

export const clearContactList = () => ({
    type: CLEAR_CONTACT_LIST
})

export const receiveContacts = (payload) => ({
    type: RECEIVE_CONTACTS,
    payload
});

export const receiveContactsError = (payload) => ({
    type: RECEIVE_CONTACTS_ERROR,
    payload,
    error: true
});

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

export const clearContact = () => ({
    type: CLEAR_CONTACT,
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