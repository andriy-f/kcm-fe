import { RootState } from '../../app/store'
import {
  LOGIN_DONE,
  LOGOFF_DONE
} from '../../actions'
import { createAction, createReducer } from '@reduxjs/toolkit'

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
export const logOffDone = createAction<UserActionPayload>(LOGOFF_DONE)

export const currentUserReducer = createReducer(initialUserState, (builder) => {
  builder.addCase(logInDone, (_state, action) => ({...action.payload.userData, tokenExpiresOn: action.payload.tokenExpiresOn}))
  builder.addCase(logOffDone, (_state, _action) => ({}))
})

export const selectUser = (state: RootState) => state.currentUser
