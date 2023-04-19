import { createAsyncThunk, createReducer } from '@reduxjs/toolkit'

import { RootState } from '../../app/store'
import { LoginData } from '../../types/LoginData'
import { requestLogIn, requestLogout } from './viewerAPI'

export const LOGIN = 'viewer/login'

interface userData {
  name: string
  permissions: string[]
}

export interface ViewerState {
  userData: userData | null
  tokenExpiresOn: number | null
  loading: boolean
  error: string | null
}

const initialViewerState: ViewerState = {
  userData: null,
  tokenExpiresOn: null,
  loading: false,
  error: null,
}


export const requestLogInThunk = createAsyncThunk(
  'viewer/requestLogin',
  async (loginData: LoginData, thunkAPI) => {
    const response = await requestLogIn(loginData)
    return response
  }
)

export const requestLogoutThunk = createAsyncThunk(
  'viewer/requestLogout',
  async (thunkAPI) => {
    const response = await requestLogout()
    return response
  }
)

export const viewerReducer = createReducer(initialViewerState, (builder) => {
  builder.addCase(requestLogInThunk.pending, (state, action) => ({
    ...state,
    loading: true
  }))
  builder.addCase(requestLogInThunk.fulfilled, (state, action) => ({
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
  builder.addCase(requestLogoutThunk.pending, (state, action) => ({
    ...state,
    loading: true
  }))
  builder.addCase(requestLogoutThunk.fulfilled, (state, action) => ({
    ...state,
    userData: null,
    tokenExpiresOn: null,
    error: null,
    loading: false
  }))
  builder.addCase(requestLogoutThunk.rejected, (state, action) => ({
    ...state,
    error: 'logout error',
    loading: false
  }))
})

export const selectViewer = (state: RootState) => state.viewer
export const selectError = (state: RootState) => state.viewer.error

export const isUserLoggedIn = (user: ViewerState) => {

  return !!(user && Object.keys(user).length !== 0
    && user.tokenExpiresOn && user.tokenExpiresOn >= Date.now())
}

export const isViewerLoggedIn = (state: RootState) => isUserLoggedIn(state.viewer)
