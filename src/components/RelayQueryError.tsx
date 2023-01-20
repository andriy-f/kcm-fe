// @flow
import React from 'react'

import RelayError from '../graphql/RelayError'

export default ({ error }: { error: RelayError }) => {
  const errors = error.errors
  return <div>
    <h1>Data fetch error!</h1>
    {errors ? errors.map((e, idx) => <div key={idx}>{e.message}</div>) : error.toString()}
    {errors && errors.some((e) => e.message === 'Not authenticated') &&
      <div>You probably need to log out and log back in.</div>
    }
  </div>
}
