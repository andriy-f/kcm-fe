import React from 'react'

import { graphqlURL } from '../../relay/environment'

const Playground = () => (
  null
  // <GraphiQL
  //   fetcher={async graphQLParams => {
  //     const data = await fetch(
  //       graphqlURL,
  //       {
  //         method: 'POST',
  //         headers: {
  //           Accept: 'application/json',
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(graphQLParams),
  //         credentials: 'include',
  //       },
  //     )
  //     return data.json().catch(() => data.text())
  //   }}
  // />
)

export default Playground
