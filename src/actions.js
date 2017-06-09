export const REQUEST_CONTACTS = 'REQUEST_CONTACTS';
export const RECEIVE_CONTACTS = 'RECEIVE_CONTACTS';

export const requestContacts = () => ({
    type: REQUEST_CONTACTS
});

export const receiveContacts = (payload) => ({
    type: RECEIVE_CONTACTS,
    payload
});
