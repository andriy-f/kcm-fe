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
import { APIURL } from '../config'
import { urlJoin } from '../utils'

// const {fetch} = fetchPonyfill()
const graphqlURL = urlJoin(APIURL, '/graphql')

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const log = debug(appName + ':relayEnvironment.js')

// const fetchFnOld: FetchFunction = (
//   operation: any,
//   variables: any,
// ) => {
//   log('relay operation', operation.text, variables)
//   return fetch(graphqlURL, {
//     credentials: 'include',
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       query: operation.text,
//       variables,
//     }),
//   }).then(response => response.json()).then((json) => {
//     log('relay result', json)
//     if (json.errors) {
//       return Promise.reject(new RelayError('GraphQL error', json.errors))
//     }

//     return json
//   })
// }

const fetchFn: FetchFunction = (params, variables) => {
  const response = fetch(graphqlURL, {
    credentials: 'include',
    method: 'POST',
    headers: [['Content-Type', 'application/json']],
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  })

  return Observable.from(response.then((data) => data.json()))
}

export function createEnvironment(): IEnvironment {
  const network = Network.create(fetchFn)
  const store = new Store(new RecordSource())
  return new Environment({ store, network })
}

export const defaultEnvironment = createEnvironment()
