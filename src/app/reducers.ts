// TODO refactor into ReduxToolkit slices
// State sample
// ...

import { combineReducers } from 'redux'
// import { reducer as formReducer } from 'final-form'

import { switchcase } from '../utils'
import {
  LOGIN, LOGIN_DONE, LOGIN_ERROR, LOGIN_CLEANUP,
  LOGOFF_DONE, LOGOFF_ERROR,
} from '../actions'

import { settingsReducer } from '../features/settings/settingsSlice'
import { currentUserReducer } from '../features/currentUser/userSlice'

interface Action {
  type: string
  payload: any
}

const logInDefaultState = { isFetching: false }
const logIn = (state = logInDefaultState, action: Action) => switchcase({
  [LOGIN]: { isFetching: true },
  [LOGIN_DONE]: { response: { success: true }, isFetching: false },
  [LOGIN_ERROR]: () => ({ error: action.payload, isFetching: false }),
  [LOGIN_CLEANUP]: logInDefaultState
})(state)(action.type)

const logoffPage = (state = {}, action: Action) => {
  switch (action.type) {
    case LOGOFF_DONE:
      return { response: action.payload }
    case LOGOFF_ERROR:
      return { error: action.payload }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  logIn,
  logoffPage,
  settings: settingsReducer,
  // form: formReducer
})

export default rootReducer
