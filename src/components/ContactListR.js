import React from 'react'
import { graphql, QueryRenderer } from 'react-relay'

import environment from '../graphql/relayEnvironment'

export default class App extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query contactListRQuery {
            contacts {
              _id
              firstName
            }
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          console.log(error, props)
          if (error) {
            return <div>Error!</div>
          }
          if (!props) {
            return <div>Loading...</div>
          }
          return <div>Contacts: {props.contacts ? props.contacts.length : 0}</div>
        }}
      />
    )
  }
}
