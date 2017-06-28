export const REQUEST_CONTACTS = 'REQUEST_CONTACTS';
export const RECEIVE_CONTACTS = 'RECEIVE_CONTACTS';
export const RECEIVE_CONTACTS_ERROR = 'RECEIVE_CONTACTS_ERROR';

export const REQUEST_AUTHENTICATE = 'REQUEST_AUTHENTICATE';
export const RECEIVE_AUTHENTICATE = 'RECEIVE_AUTHENTICATE';
export const RECEIVE_AUTHENTICATE_ERROR = 'RECEIVE_AUTHENTICATE_ERROR';

export const REQUEST_LOGOFF = 'REQUEST_LOGOFF';
export const RECEIVE_LOGOFF = 'RECEIVE_LOGOFF';
export const RECEIVE_LOGOFF_ERROR = 'RECEIVE_CONTACTS_ERROR';
export const requestContacts = () => ({
    type: REQUEST_CONTACTS
});

export const receiveContacts = (payload) => ({
    type: RECEIVE_CONTACTS,
    payload
});

export const receiveContactsError = (payload) => ({
    type: RECEIVE_CONTACTS_ERROR,
    payload,
    error: true
});
export const requestAuthenticate = (login, password) => ({
    type: REQUEST_AUTHENTICATE,
    login,
    password
});

export const receiveAuthenticate = (payload) => ({
    type: RECEIVE_AUTHENTICATE,
    payload
});

export const receiveAuthenticateError = (payload) => ({
    type: RECEIVE_AUTHENTICATE_ERROR,
    payload,
    error: true
});