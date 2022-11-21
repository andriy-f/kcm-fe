import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { persistStore } from 'redux-persist'

import App from '../components/App'
import configureStore from '../configureStore'

const store = configureStore()
persistStore(store)

function Root() {
  return (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  )
}

export default Root
