import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { persistStore } from 'redux-persist'

import { getClient } from '../graphql/apollo'
import App from '../components/App'
import configureStore from '../configureStore'

const store = configureStore()
persistStore(store)
const clientSideApolloClient = getClient()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <ApolloProvider client={clientSideApolloClient}>
          <Router>
            <App />
          </Router>
        </ApolloProvider>
      </Provider>
    )
  }
}
