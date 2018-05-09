import fetch from 'node-fetch'
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'

import { createApolloClient } from './apollo'
import App from './components/App'
import { default as configureStore } from './configureStore'


export function render(req, store, context) {
  const apolloClient = createApolloClient(fetch)
  return renderToString(
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <StaticRouter
          location={req.url}
          context={context}
        >
          <App />
        </StaticRouter>
      </ApolloProvider>
    </Provider>
  )
}

export function renderHead(context) {
  return context.head.map(h => (
    renderToStaticMarkup(h)
  )).join('')
}

export { configureStore }
