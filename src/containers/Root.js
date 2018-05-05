import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { persistStore } from 'redux-persist'

import { apolloClient } from '../apollo'
import configureStore from '../configureStore'
import App from '../components/App'

const store = configureStore()

persistStore(store);

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <Router>
            <App />
          </Router>
        </ApolloProvider>
      </Provider>
    )
  }
}
