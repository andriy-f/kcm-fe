// State sample
// ...

import { REQUEST_CONTACTS } from './actions';
import { combineReducers } from 'redux';

function contacts(state = [], action) {
    switch (action.type) {
        case REQUEST_CONTACTS:
            return state.slice();// TODO
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    contacts
})

export default rootReducer