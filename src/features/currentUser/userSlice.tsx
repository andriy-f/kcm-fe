import { RootState } from '../../app/store'
import { createAction, createAsyncThunk, createReducer } from '@reduxjs/toolkit'
import { LoginData } from '../../types/LoginData'
import { requestLogIn } from './currentUserApi'

export const LOGIN = 'user/login'
export const LOGIN_DONE = 'user/login_done'
export const LOGIN_ERROR = 'user/LOGIN_ERROR'
export const LOGIN_CLEANUP = 'user/LOGIN_CLEANUP'

export const logIn = createAction<{ login: string, password: string }>(LOGIN)
export const logInError = createAction(LOGIN_ERROR)
export const logInCleanup = createAction(LOGIN_CLEANUP)

export const LOGOFF = 'user/LOGOFF'
export const LOGOFF_DONE = 'user/LOGOFF_DONE'
export const LOGOFF_ERROR = 'user/LOGOFF_ERROR'

interface CurrentUserData {
  name: string
  permissions: string[]
}

export interface UserState {
  userData: CurrentUserData | null
  tokenExpiresOn: number | null
  loading: 'idle' | 'pending'
}

interface UserActionPayload {
  userData: CurrentUserData
  tokenExpiresOn: number
}

const initialUserState: UserState = {
  userData: null,
  tokenExpiresOn: null,
  loading: 'idle'
}

export const logInDone = createAction<UserActionPayload>(LOGIN_DONE)

export const logOff = createAction(LOGOFF)
export const logOffDone = createAction(LOGOFF_DONE)
export const logOffError = createAction(LOGOFF_ERROR)

export const requestLogInThunk = createAsyncThunk(
  'users/fetchLogin',
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
    loading: 'pending'
  }))
  builder.addCase(requestLogInThunk.fulfilled , (state, action) => ({
    ...state,
    userData: action.payload.userData,
    tokenExpiresOn: action.payload.tokenExpiresOn,
    loading: 'idle'
  }))
  builder.addCase(requestLogInThunk.rejected, (state, action) => ({
    ...state,
    error: 'login error',
    loading: 'idle'
  }))
})

export const selectCurrentUser = (state: RootState) => state.currentUser

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
