import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime'

import { BACKEND_URL } from '../config'
import { urlJoin } from '../utils'
const graphqlURL = urlJoin(BACKEND_URL, '/graphql')

const fetchQuery = (
  operation,
  variables,
) =>
  fetch(graphqlURL, {
    crossDomain: true,
    withCredentials: true,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => response.json()).then((json) => {
    console.log('relay test', json)
    return json
  })

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
})

export default environment
