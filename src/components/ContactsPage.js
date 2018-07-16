import React from 'react'
import { graphql, QueryRenderer } from 'react-relay'

import environment from '../graphql/relayEnvironment'
import ContactList from '../containers/ContactList'
// import ContactTable from './ContactTable'

export default class extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query ContactsPageQuery {
            ...ContactList_query
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

          // const { contacts } = props.allContacts || {}
          return (<div>
            {/* Contacts: {contacts ? contacts.length : 0} */}
            {/* <ContactTable items={contacts} /> */}
            <ContactList />
          </div>)
        }}
      />
    )
  }
}
