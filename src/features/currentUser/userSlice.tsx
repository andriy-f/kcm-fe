import { RootState } from '../../app/store'
import { createAction, createAsyncThunk, createReducer } from '@reduxjs/toolkit'
import { LoginData } from '../../types/LoginData'
import { requestLogIn } from './currentUserApi'

export const LOGIN = 'viewer/login'
export const LOGIN_DONE = 'viewer/login_done'
export const LOGIN_ERROR = 'viewer/LOGIN_ERROR'
export const LOGIN_CLEANUP = 'viewer/LOGIN_CLEANUP'

export const logIn = createAction<{ login: string, password: string }>(LOGIN)
export const logInError = createAction(LOGIN_ERROR)
export const logInCleanup = createAction(LOGIN_CLEANUP)

export const LOGOFF = 'viewer/LOGOFF'
export const LOGOFF_DONE = 'viewer/LOGOFF_DONE'
export const LOGOFF_ERROR = 'viewer/LOGOFF_ERROR'

interface CurrentUserData {
  name: string
  permissions: string[]
}

export interface UserState {
  userData: CurrentUserData | null
  tokenExpiresOn: number | null
  loading: boolean
  error: string | null
}

interface UserActionPayload {
  userData: CurrentUserData
  tokenExpiresOn: number
}

const initialUserState: UserState = {
  userData: null,
  tokenExpiresOn: null,
  loading: false,
  error: null,
}

export const logInDone = createAction<UserActionPayload>(LOGIN_DONE)

export const logOff = createAction(LOGOFF)
export const logOffDone = createAction(LOGOFF_DONE)
export const logOffError = createAction(LOGOFF_ERROR)

export const requestLogInThunk = createAsyncThunk(
  'viewer/fetchLogin',
  async (loginData: LoginData, thunkAPI) => {
    const response = await requestLogIn(loginData)
    return response
  }
)

export const currentUserReducer = createReducer(initialUserState, (builder) => {
  // not needed without epics?
  builder.addCase(logInDone, (state, action) => ({
    ...state,
    userData: action.payload.userData,
    tokenExpiresOn: action.payload.tokenExpiresOn
  }))
  builder.addCase(logOffDone, (state, _action) => ({
    ...state,
    userData: null,
    tokenExpiresOn: null
  }))
  builder.addCase(requestLogInThunk.pending, (state, action) => ({
    ...state,
    loading: true
  }))
  builder.addCase(requestLogInThunk.fulfilled , (state, action) => ({
    ...state,
    userData: action.payload.userData,
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

export const selectCurrentUser = (state: RootState) => state.currentUser
export const selectError = (state: RootState) => state.currentUser.error

export const isUserLoggedIn = (user: UserState) => {

  return !!(user && Object.keys(user).length !== 0
    && user.tokenExpiresOn && user.tokenExpiresOn >= Date.now())
}

export const isCurrentUserLoggedIn = (state: RootState) => isUserLoggedIn(state.currentUser)

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
