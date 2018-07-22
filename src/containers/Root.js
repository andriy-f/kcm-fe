import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { persistStore } from 'redux-persist'

import App from '../components/App'
import configureStore from '../configureStore'

const store = configureStore()
persistStore(store)

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    )
  }
}
