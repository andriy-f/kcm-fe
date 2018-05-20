import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'

import { getClient } from './graphql/apollo'
import App from './components/App'
import configureStore from './configureStore'

export function render(req, store, context) {
  const apolloClient = getClient()
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
