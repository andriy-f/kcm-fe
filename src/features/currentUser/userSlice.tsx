import { RootState } from '../../app/store'
import { createAction, createReducer } from '@reduxjs/toolkit'

export const LOGIN = 'LOGIN'
export const LOGIN_DONE = 'LOGIN_DONE'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGIN_CLEANUP = 'LOGIN_CLEANUP'

export const logIn = (login: string, password: string) => ({
    type: LOGIN,
    login,
    password
})


export const logInError = (payload: any) => ({
    type: LOGIN_ERROR,
    payload,
    error: true
})

export const logInCleanup = () => ({
    type: LOGIN_CLEANUP
})

export const LOGOFF = 'LOGOFF'
export const LOGOFF_DONE = 'LOGOFF_DONE'
export const LOGOFF_ERROR = 'LOGOFF_ERROR'

export interface UserState {
  name?: string
  tokenExpiresOn?: number
}

interface UserActionPayload {
  userData: any
  tokenExpiresOn: number
}

const initialUserState: UserState = {}

export const logInDone = createAction<UserActionPayload>(LOGIN_DONE)

export const logOff = createAction(LOGOFF)
export const logOffDone = createAction(LOGOFF_DONE)
// export const logOffError = createAction(LOGOFF_ERROR)

export const currentUserReducer = createReducer(initialUserState, (builder) => {
  builder.addCase(logInDone, (_state, action) => ({...action.payload.userData, tokenExpiresOn: action.payload.tokenExpiresOn}))
  builder.addCase(logOffDone, (_state, _action) => ({}))
})

export const selectCurrentUser = (state: RootState) => state.currentUser

export const isCurrentUserLoggedIn = (state: RootState) => {
  const currentUser = state.currentUser

  return currentUser && Object.keys(currentUser).length !== 0
    && currentUser.tokenExpiresOn && currentUser.tokenExpiresOn >= Date.now()
}
