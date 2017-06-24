// State sample
// ...

import { RECEIVE_CONTACTS, RECEIVE_AUTHENTICATE } from './actions';
import { combineReducers } from 'redux';

function contacts(state = [], action) {
    switch (action.type) {
        case RECEIVE_CONTACTS:
            return action.payload;
        default:
            return state;
    }
}

const currentUser = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_AUTHENTICATE:
            return action.payload;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    currentUser,
    contacts
})

export default rootReducer