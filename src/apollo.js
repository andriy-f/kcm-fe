import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'

import { BACKEND_URL } from './config'
import { isSSR } from './consts'

export const createApolloClient = (fetch) => {
  const link = createHttpLink({
    uri: BACKEND_URL + '/graphql',
    credentials: 'include',
    fetch,
  })

  const cache = new InMemoryCache()

  return new ApolloClient({
    cache,
    link,
  })
}

/** Use same apolloClient if not SSR */
export const clientSideApolloClient = isSSR ? null : createApolloClient()
