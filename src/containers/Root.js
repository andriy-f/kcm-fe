import ApolloClient from 'apollo-boost'
import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { persistStore } from 'redux-persist'

import { BACKEND_URL } from '../config'
import configureStore from '../configureStore'
import App from '../components/App'

const store = configureStore()

const apolloClient = new ApolloClient({
  uri: BACKEND_URL + '/graphql'
})

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
