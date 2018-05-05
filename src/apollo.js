import ApolloClient from 'apollo-boost'

import { BACKEND_URL } from './config'

export const apolloClient = new ApolloClient({
  uri: BACKEND_URL + '/graphql'
})
