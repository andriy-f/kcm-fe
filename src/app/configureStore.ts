// Older, TODO refactor
import { createStore, applyMiddleware, compose, Store } from 'redux'

import { createLogger } from 'redux-logger'
import { autoRehydrate } from 'redux-persist'

import rootReducer from './reducers'
import { epicMiddleware } from '../middleware/epics'
import { isDev } from '../utils'
import { SettingsState } from '../features/settings/settingsSlice'
import { UserState } from '../features/currentUser/userSlice'

const loggerMiddleware = createLogger()
let myConfigureStore: (preloadedState?: any) => Store<{
  currentUser: UserState,
  settings: SettingsState
}>

if (isDev) {
  const composeEnhancers =
    (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    || compose

  myConfigureStore = (preloadedState) => {
    return createStore(
      rootReducer,
      preloadedState,
      composeEnhancers(
        applyMiddleware(
          loggerMiddleware,
          epicMiddleware
        ),
        autoRehydrate()
      )
    )
  }
} else {
  myConfigureStore = (preloadedState) => {
    return createStore(
      rootReducer,
      preloadedState,
      compose(
        applyMiddleware(
          epicMiddleware
        ),
        autoRehydrate()
      )
    )
  }
}

export default myConfigureStore
