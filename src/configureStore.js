import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'

import rootReducer from './reducers'
import { epicMiddleware } from './middleware/epics'
import { isDev } from './utils'

const loggerMiddleware = createLogger()
const composeEnhancers = isDev ?
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) :
  compose;

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(
      loggerMiddleware,
      epicMiddleware
    ))
  )
}