// State sample
// ...

import { combineReducers } from 'redux';

import { RECEIVE_CONTACTS, RECEIVE_CONTACTS_ERROR, RECEIVE_AUTHENTICATE, RECEIVE_AUTHENTICATE_ERROR } from './actions';
import * as jwt_decode from 'jwt-decode';

function contactsPage(state = {}, action) {
    switch (action.type) {
        case RECEIVE_CONTACTS:
            return { items: action.payload };
        case RECEIVE_CONTACTS_ERROR:
            return { error: JSON.stringify(action.payload) }
        default:
            return state;
    }
}

const currentUser = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_AUTHENTICATE:
            let respData = action.payload;
            if(respData.success){
                let decodedToken = jwt_decode(respData.token);
                return decodedToken;
            } else {
                return state;
            }
        default:
            return state;
    }
}

const authenticationPage = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_AUTHENTICATE:
            let respData = action.payload;
            return { response: respData };
        case RECEIVE_AUTHENTICATE_ERROR:
            let respData2 = action.payload;
            return { response: respData2 };
        default:
            return state;
    }
}
const rootReducer = combineReducers({
    currentUser,
    authenticationPage,
    contactsPage
})

export default rootReducer