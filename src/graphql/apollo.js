import * as debug from 'debug'
import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'
import { onError } from 'apollo-link-error'

import { BACKEND_URL } from '../config'
import { isSSR, appName } from '../consts'
import { urlJoin } from '../utils'

const logger = debug(appName + ':apollo.js')
const graphqlURL = urlJoin(BACKEND_URL, '/graphql')

const createApolloClient = (fetch) => {
  logger('Creating apollo client')
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
const clientSideApolloClient = isSSR ? null : createApolloClient()

/** Use same apolloClient if not SSR */
export const getClient = () => !isSSR ? clientSideApolloClient : createApolloClient()
