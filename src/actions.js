export const REQUEST_CONTACTS = 'REQUEST_CONTACTS';
export const RECEIVE_CONTACTS = 'RECEIVE_CONTACTS';
export const RECEIVE_CONTACTS_ERROR = 'RECEIVE_CONTACTS_ERROR';

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';
export const RECEIVE_LOGIN_ERROR = 'RECEIVE_LOGIN_ERROR';

export const REQUEST_LOGOFF = 'REQUEST_LOGOFF';
export const RECEIVE_LOGOFF = 'RECEIVE_LOGOFF';
export const RECEIVE_LOGOFF_ERROR = 'RECEIVE_LOGOFF_ERROR';

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
});