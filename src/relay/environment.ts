import {
  Store,
  RecordSource,
  Environment,
  Network,
  Observable,
} from 'relay-runtime'
import type { FetchFunction, IEnvironment } from 'relay-runtime'
import debug from 'debug'

import { appName } from '../consts'
import { beUrl } from '../config'
import { urlJoin } from '../utils'
import AppRelayError from './AppRelayError'

export const graphqlURL = urlJoin(beUrl, '/graphql')

const log = debug(appName + ':relayEnvironment.js')

const fetchFn: FetchFunction = (params, variables) => {
  const res = fetch(graphqlURL, {
    credentials: 'include',
    method: 'POST',
    headers: [['Content-Type', 'application/json']],
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  })
    .then(r => r.json())
    .then(json => {
      if (json.errors) {
        log('GraphQL errors', json.errors)
        return Promise.reject(new AppRelayError('GraphQL error', json.errors))
      }

      return json
    })


  return Observable.from(res)
}

export function createEnvironment(): IEnvironment {
  const network = Network.create(fetchFn)
  const store = new Store(new RecordSource())
  return new Environment({ store, network })
}

export const defaultEnvironment = createEnvironment()
