import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'

import { BACKEND_URL } from './config'

const link = createHttpLink({
  uri: BACKEND_URL + '/graphql',
  credentials: 'include',
})

const cache = new InMemoryCache()
export const apolloClient = new ApolloClient({
  cache,
  link,
})
