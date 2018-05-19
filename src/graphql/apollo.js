import * as debug from 'debug'
import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'

import { BACKEND_URL } from '../config'
import { isSSR, appName } from '../consts'
import { ApolloLink } from 'apollo-link';

const logger = debug(appName + ':apollo.js')
const graphqlURL = BACKEND_URL + '/graphql'

export const createApolloClient = (fetch) => {
  const httpLink = createHttpLink({
    uri: graphqlURL,
    credentials: 'include',
    fetch,
  })

  const cache = new InMemoryCache()

  const errorLink =
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) =>
          logger(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`))
      }
      if (networkError) {
        logger(`[Network error]: ${networkError}`)
      }
    })

  return new ApolloClient({
    cache,
    link: ApolloLink.from([errorLink, httpLink]),
  })
}

/** Use same apolloClient if not SSR */
export const clientSideApolloClient = isSSR ? null : createApolloClient()
