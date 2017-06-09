// State sample
// ...

import { RECEIVE_CONTACTS } from './actions';
import { combineReducers } from 'redux';

function contacts(state = [], action) {
    switch (action.type) {
        case RECEIVE_CONTACTS:
            return action.payload;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    contacts
})

export default rootReducer