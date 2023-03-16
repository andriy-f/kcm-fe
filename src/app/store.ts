import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


import { settingsReducer } from '../features/settings/settingsSlice'
import { currentUserReducer } from '../features/currentUser/userSlice'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  settings: settingsReducer,
  currentUser: currentUserReducer
})

const persistingReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistingReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createLogger()),
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
