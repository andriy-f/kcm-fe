import React from 'react'

type Props = {
  error: Error
}
function RelayQueryError(props: Props) {
  // const errors = props.error
  return (
  <div>
    <h1>Data fetch error!</h1>
    {props.error?.cause?.toString()}
    {/* {errors ? errors.map((e, idx) => <div key={idx}>{e.message}</div>) : error.toString()}
    {errors && errors.some((e) => e.message === 'Not authenticated') &&
      <div>You probably need to log out and log back in.</div>
    } */}
  </div>
  )
}

export default RelayQueryError
