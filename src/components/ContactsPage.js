// @flow
import debug from 'debug'
import React from 'react'
import { graphql, QueryRenderer } from 'react-relay'

import FilteringScrollingContactsTable from '../containers/FilteringScrollingContactsTable'
import environment from '../graphql/relayEnvironment'
import { appName } from '../consts'
import { RTButtonLink } from '../components/RTButtonLink'
import { addItemButtonContainer, contactsPage } from '../App.css'
import RelayQueryError from './RelayQueryError'

// eslint-disable-next-line no-unused-vars
const log = debug(appName + ':ContactsPage.js')

export default class extends React.Component<{ readonly?: boolean }> {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query ContactsPageQuery {
            ...FilteringScrollingContactsTable_contactsData
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          if (error) {
            return <RelayQueryError error={error} />
          }
          if (!props) {
            return <div>Loading...</div>
          }

          return (
            <article className={contactsPage}>
              Readonly: {this.props.readonly}
              <FilteringScrollingContactsTable contactsData={props} relay={null} readonly={this.props.readonly} />
              <div className={addItemButtonContainer}>
                <RTButtonLink icon='add' floating accent to="/contacts/new" />
              </div>
            </article>)
        }}
      />
    )
  }
}
