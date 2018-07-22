// State sample
// ...

import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import { switchcase } from './utils'
import {
  LOGIN, LOGIN_DONE, LOGIN_ERROR, LOGIN_CLEANUP,
  LOGOFF_DONE, LOGOFF_ERROR,
  TOGGLE_SETTING, SET_SETTING
} from './actions'

const currentUser = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_DONE:
      let respData = action.payload
      return {
        ...respData.userData,
        tokenExpiresOn: action.payload.tokenExpiresOn
      }
    case LOGOFF_DONE:
      return {}
    default:
      return state
  }
}

const logInDefaultState = { isFetching: false }
const logIn = (state = logInDefaultState, action) => switchcase({
  [LOGIN]: { isFetching: true },
  [LOGIN_DONE]: { response: { success: true }, isFetching: false },
  [LOGIN_ERROR]: () => ({ error: action.payload, isFetching: false }),
  [LOGIN_CLEANUP]: logInDefaultState
})(state)(action.type)

const logoffPage = (state = {}, action) => {
  switch (action.type) {
    case LOGOFF_DONE:
      return { response: action.payload }
    case LOGOFF_ERROR:
      return { error: action.payload }
    default:
      return state
  }
}

const settings = (state = {
  bodyScrolled: false,
  sideNavActive: false,
  sideNavPinned: false,
  sideNavClipped: false,
  rightSideNavActive: false,
  rightSideNavPinned: false,
  rightSideNavClipped: true
}, action) => {
  switch (action.type) {
    case TOGGLE_SETTING:
      let name = action.payload.name
      let oldSettingValue = state[name]
      return { ...state, [name]: !oldSettingValue }
    case SET_SETTING:
      return { ...state, [action.payload.name]: action.payload.value }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  currentUser,
  logIn,
  logoffPage,
  settings,
  form: formReducer
})

export default rootReducer
