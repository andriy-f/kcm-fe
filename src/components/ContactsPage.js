import debug from 'debug'
import React from 'react'
import { graphql, QueryRenderer } from 'react-relay'

import { appName } from '../consts'
import ContactView from '../containers/ContactView'
import ContactList from '../containers/ContactList'
import environment from '../graphql/relayEnvironment'
// import ContactTable from './ContactTable'

const log = debug(appName + ':relayEnvironment.js')

export default class extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query ContactsPageQuery {
            alfaContact: contact(id: "Y29udGFjdDo1NzhmMmJhYTEyZWFlYmFiZWM0YWYyOGI=") {
              id
              contactId
              firstName
            }
            betaContact: contact(id: "Y29udGFjdDo1NzhmMmJhYTEyZWFlYmFiZWM0YWYyOGI=") {
              ...ContactView_contact
            }
            ...ContactList_allContacts
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
          log('render CP', props)
          const alfaContact = props.alfaContact
          return (<article>
            {/* Contacts: {contacts ? contacts.length : 0} */}
            {/* <ContactTable items={contacts} /> */}
            <section>
              alfaContact:
              {JSON.stringify(alfaContact)}
            </section>
            <section>
              betaContact:
              <ContactView contact={props.betaContact} />
            </section>
            <section>
              List:
              <ContactList allContacts={props} />
            </section>
          </article>)
        }}
      />
    )
  }
}
