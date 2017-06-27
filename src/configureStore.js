import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'

import rootReducer from './reducers'
import { epicMiddleware } from './middleware/epics'
import { isDev } from './utils'

const loggerMiddleware = createLogger()
let configureStore

if (isDev) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  configureStore = (preloadedState) => {
    return createStore(
      rootReducer,
      preloadedState,
      composeEnhancers(applyMiddleware(
        loggerMiddleware,
        epicMiddleware
      ))
    )
  }
} else {
  configureStore = (preloadedState) => {
    return createStore(
      rootReducer,
      preloadedState,
      applyMiddleware(
        epicMiddleware
      )
    )
  }
}

export default configureStore