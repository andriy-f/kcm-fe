// State sample
// ...

import { combineReducers } from 'redux'
// import { reducer as formReducer } from 'final-form'

import { switchcase } from './utils'
import {
  LOGIN, LOGIN_DONE, LOGIN_ERROR, LOGIN_CLEANUP,
  LOGOFF_DONE, LOGOFF_ERROR,
  TOGGLE_SETTING, SET_SETTING
} from './actions'

interface Action {
  type: string
  payload: any
}

interface ActionWithPayload<T> {
  type: string
  payload: T
}

const currentUser = (state = {}, action: Action) => {
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

export interface SettingsState {
  bodyScrolled: boolean,
  sideNavActive: boolean,
  sideNavPinned: boolean,
  sideNavClipped: boolean,
  rightSideNavActive: boolean,
  rightSideNavPinned: boolean,
  rightSideNavClipped: boolean
}

type SettingName = keyof SettingsState

interface SettingsPayload {
  name: string
  value?: any
}

const settings = (state: SettingsState = {
  bodyScrolled: false,
  sideNavActive: false,
  sideNavPinned: false,
  sideNavClipped: false,
  rightSideNavActive: false,
  rightSideNavPinned: false,
  rightSideNavClipped: true
}, action: ActionWithPayload<SettingsPayload>) => {
  switch (action.type) {
    case TOGGLE_SETTING:
      let name = action.payload.name
      if (name in state) {
        const settingName = name as SettingName
        const oldSettingValue = state[settingName]
        return { ...state, [name]: !oldSettingValue }
      } else {
        return { ...state, error: '"' + name + '" is not valid setting name' }
      }

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
  // form: formReducer
})

export default rootReducer
