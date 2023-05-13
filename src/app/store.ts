import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


import { settingsReducer } from '../features/settings/settingsSlice'
import { viewerReducer } from '../features/viewer/viewerSlice'
import { shouldLogRedux } from '../config'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  settings: settingsReducer,
  viewer: viewerReducer
})

const persistingReducer = persistReducer(persistConfig, rootReducer)

const additionalMiddleware = shouldLogRedux ? [createLogger()] : []

export const store = configureStore({
  reducer: persistingReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(additionalMiddleware),
})

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
