import React from 'react'
import { graphql, QueryRenderer } from 'react-relay'

import environment from '../graphql/relayEnvironment'
import ContactTable from '../components/ContactTable'

export default class App extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query ContactListRQuery {
            allContacts {
              contacts {
                id
                firstName
                lastName
                email
                phoneNumber
              }
            }
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          if (error) {
            return <div>Error!</div>
          }
          if (!props) {
            return <div>Loading...</div>
          }

          const { contacts } = props.allContacts || {}
          return (<div>
            {/* Contacts: {contacts ? contacts.length : 0} */}
            <ContactTable items={contacts} />
          </div>)
        }}
      />
    )
  }
}
