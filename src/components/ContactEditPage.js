// @flow
import debug from 'debug'
import React from 'react'
import { graphql, QueryRenderer } from 'react-relay'

import ContactEdit from '../containers/ContactEdit'
import environment from '../graphql/relayEnvironment'
import { appName } from '../consts'
import { kTextCenter } from '../App.module.css'
import RelayQueryError from './RelayQueryError'

// eslint-disable-next-line no-unused-vars
const log = debug(appName + ':ContactEditPage.js')

export default class extends React.Component<any> {
  _handleSave = () => {
    this.props.history.push('/contacts')
  }

  _handleCancel = () => {
    this.props.history.push('/contacts')
  }

  render() {
    const { match } = this.props
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query ContactEditPageQuery ($id: ID!) {
            contact(id: $id) {
            ...ContactEdit_contact
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
            <article>
              <h3 className={kTextCenter}>Edit Contact</h3>
              <ContactEdit contact={props.contact} onSave={this._handleSave} onCancel={this._handleCancel} />
            </article>)
        }}
      />
    )
  }
}
