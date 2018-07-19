import debug from 'debug'
import React from 'react'
import { graphql, QueryRenderer } from 'react-relay'

import ContactListWithFilter from '../containers/ContactListWithFilter'
import environment from '../graphql/relayEnvironment'
import { appName } from '../consts'
import { RTButtonLink } from '../components/RTButtonLink'
import { addItemButtonContainer } from '../App.css'

// eslint-disable-next-line no-unused-vars
const log = debug(appName + ':ContactsPage.js')

export default class extends React.Component {

  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query ContactsPageQuery {
            ...ContactListWithFilter_contactsData
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

          return (<article>
            <ContactListWithFilter contactsData={props} />
            <div className={addItemButtonContainer}>
              <RTButtonLink icon='add' floating accent to="/contacts/new" />
            </div>
          </article>)
        }}
      />
    )
  }
}
