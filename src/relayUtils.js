import React from 'react'

export const renderRelayQueryError = (error) => {
  return <div>
    <h1>Error!</h1>
    {error.map ? error.map((e, idx) => <div key={idx}>{e.message}</div>) : error.toString()}
  </div>
}
