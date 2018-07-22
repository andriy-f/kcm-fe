// @flow
import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime'
import fetch from 'isomorphic-fetch'
import debug from 'debug'

import { appName } from '../consts'
import { BACKEND_URL } from '../config'
import { urlJoin } from '../utils'

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
      if (json.errors.some && json.errors.some((e) => e.message === 'Not authenticated')) {
        return Promise.reject(new Error('Not authenticated. You need to log in or log out and log in.'))
      }

      return Promise.reject(json.errors)
    }

    return json
  })
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
})

export default environment