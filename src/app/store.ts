import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'

import { settingsReducer } from '../features/settings/settingsSlice'
import { currentUserReducer } from '../features/currentUser/userSlice'

// TODO implement
export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    currentUser: currentUserReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createLogger()),
})

// export const store = myConfigureStore()

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
