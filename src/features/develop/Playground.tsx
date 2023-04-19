import React from 'react'
import GraphiQL from 'graphiql'
import 'graphiql/graphiql.min.css'

import { graphqlURL } from '../../relay/environment'

const Playground = () => (
  <GraphiQL
    fetcher={async graphQLParams => {
      const data = await fetch(
        graphqlURL,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(graphQLParams),
          credentials: 'include',
        },
      )
      return data.json().catch(() => data.text())
    }}
  />
)

export default Playground
