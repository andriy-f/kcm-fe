// @flow
import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime'
import fetchPonyfill from 'fetch-ponyfill'
import debug from 'debug'

import RelayError from './RelayError'
import { appName } from '../consts'
import { BACKEND_URL } from '../config'
import { urlJoin } from '../utils'

const {fetch} = fetchPonyfill()

const log = debug(appName + ':relayEnvironment.js')

const graphqlURL = urlJoin(BACKEND_URL, '/graphql')

const fetchQuery = (
  operation,
  variables,
) => {
  log('relay operation', operation.text, variables)
  return fetch(graphqlURL, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => response.json()).then((json) => {
    log('relay result', json)
    if (json.errors) {
      return Promise.reject(new RelayError('GraphQL error', json.errors))
    }

    return json
  })
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
})

export default environment
