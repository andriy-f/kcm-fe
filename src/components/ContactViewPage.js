// @flow
import debug from 'debug'
import React from 'react'
import { graphql, QueryRenderer } from 'react-relay'

import NarrowLayout from '../components/NarrowLayout'
import ContactView from '../containers/ContactView'
import environment from '../graphql/relayEnvironment'
import { appName } from '../consts'
import { kTextCenter } from '../App.css'
import RelayQueryError from './RelayQueryError'

// eslint-disable-next-line no-unused-vars
const log = debug(appName + ':ContactViewPage.js')

export default class extends React.Component<any> {

  _handleGoBack = () => {
    this.props.history.push('/contacts')
  }

  render() {
    const { match } = this.props
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query ContactViewPageQuery ($id: ID!) {
            contact(id: $id) {
            ...ContactView_contact
            }
          }
        `}
        variables={{
          id: match.params.id
        }}
        render={({ error, props }) => {
          if (error) {
            return <RelayQueryError error={error} />
          }

          if (!props) {
            return <div>Loading...</div>
          }

          return (
            <NarrowLayout>
              <h2 className={kTextCenter}>Contact</h2>
              <ContactView contact={props.contact} onGoBack={this._handleGoBack} />
            </NarrowLayout>)
        }}
      />
    )
  }
}

