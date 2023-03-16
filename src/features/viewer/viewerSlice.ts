import { createAction, createAsyncThunk, createReducer } from '@reduxjs/toolkit'

import { RootState } from '../../app/store'
import { LoginData } from '../../types/LoginData'
import { requestLogIn } from './viewerAPI'

export const LOGIN = 'viewer/login'
export const LOGIN_DONE = 'viewer/login_done'
export const LOGIN_ERROR = 'viewer/LOGIN_ERROR'
export const LOGIN_CLEANUP = 'viewer/LOGIN_CLEANUP'

export const logIn = createAction<{ login: string, password: string }>(LOGIN)
export const logInError = createAction(LOGIN_ERROR)
export const logInCleanup = createAction(LOGIN_CLEANUP)

export const LOGOUT = 'viewer/LOGOUT'
export const LOGOUT_DONE = 'viewer/LOGOUT_DONE'
export const LOGOUT_ERROR = 'viewer/LOGOUT_ERROR'

interface ViewerData {
  name: string
  permissions: string[]
}

export interface ViewerState {
  viewerData: ViewerData | null
  tokenExpiresOn: number | null
  loading: boolean
  error: string | null
  theme: 'dark' | 'light'
}

interface UserActionPayload {
  viewerData: ViewerData
  tokenExpiresOn: number
}

const initialUserState: ViewerState = {
  viewerData: null,
  tokenExpiresOn: null,
  loading: false,
  theme: 'light',
  error: null,
}

export const logInDone = createAction<UserActionPayload>(LOGIN_DONE)

export const logout = createAction(LOGOUT)
export const logoutDone = createAction(LOGOUT_DONE)
export const logoutError = createAction(LOGOUT_ERROR)
export const toggleTheme = createAction('viewer/toggleTheme')

export const requestLogInThunk = createAsyncThunk(
  'viewer/fetchLogin',
  async (loginData: LoginData, thunkAPI) => {
    const response = await requestLogIn(loginData)
    return response
  }
)

export const viewerReducer = createReducer(initialUserState, (builder) => {
  // not needed without epics?
  builder.addCase(logInDone, (state, action) => ({
    ...state,
    viewerData: action.payload.viewerData,
    tokenExpiresOn: action.payload.tokenExpiresOn
  }))
  builder.addCase(logoutDone, (state, _action) => ({
    ...state,
    viewerData: null,
    tokenExpiresOn: null
  }))
  builder.addCase(toggleTheme, (state, action) => ({
    ...state,
    theme: (state.theme === 'light' ? 'dark' : 'light')
  }))
  builder.addCase(requestLogInThunk.pending, (state, action) => ({
    ...state,
    loading: true
  }))
  builder.addCase(requestLogInThunk.fulfilled , (state, action) => ({
    ...state,
    viewerData: action.payload.userData,
    tokenExpiresOn: action.payload.tokenExpiresOn,
    error: null,
    loading: false
  }))
  builder.addCase(requestLogInThunk.rejected, (state, action) => ({
    ...state,
    error: 'login error',
    loading: false
  }))
})

export const selectViewer = (state: RootState) => state.viewer
export const selectTheme = (state: RootState) => state.viewer.theme
export const selectError = (state: RootState) => state.viewer.error

export const isUserLoggedIn = (user: ViewerState) => {

  return !!(user && Object.keys(user).length !== 0
    && user.tokenExpiresOn && user.tokenExpiresOn >= Date.now())
}

export const isCurrentUserLoggedIn = (state: RootState) => isUserLoggedIn(state.viewer)

// const logInDefaultState = { isFetching: false }
// const logIn = (state = logInDefaultState, action: Action) => switchcase({
//   [LOGIN]: { isFetching: true },
//   [LOGIN_DONE]: { response: { success: true }, isFetching: false },
//   [LOGIN_ERROR]: () => ({ error: action.payload, isFetching: false }),
//   [LOGIN_CLEANUP]: logInDefaultState
// })(state)(action.type)

// const logoffPage = (state = {}, action: Action) => {
//   switch (action.type) {
//     case LOGOFF_DONE:
//       return { response: action.payload }
//     case LOGOFF_ERROR:
//       return { error: action.payload }
//     default:
//       return state
//   }
// }
