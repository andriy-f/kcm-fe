export const REQUEST_CONTACTS = 'REQUEST_CONTACTS';
export const RECEIVE_CONTACTS = 'RECEIVE_CONTACTS';

export const REQUEST_AUTHENTICATE = 'REQUEST_AUTHENTICATE';
export const RECEIVE_AUTHENTICATE = 'RECEIVE_AUTHENTICATE';
export const RECEIVE_AUTHENTICATE_ERROR = 'RECEIVE_AUTHENTICATE_ERROR';

export const requestContacts = () => ({
    type: REQUEST_CONTACTS
});

export const receiveContacts = (payload) => ({
    type: RECEIVE_CONTACTS,
    payload
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