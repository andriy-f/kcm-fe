import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import { autoRehydrate } from 'redux-persist'

import rootReducer from './reducers'
import { epicMiddleware } from './middleware/epics'
import { isDev } from './utils'

const loggerMiddleware = createLogger()
let configureStore

if (isDev) {
  const composeEnhancers = 
    (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    || compose;

  configureStore = (preloadedState) => {
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
  configureStore = (preloadedState) => {
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

export default configureStore