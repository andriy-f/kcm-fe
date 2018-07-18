import debug from 'debug'
import React from 'react'

import environment from '../graphql/relayEnvironment'
import CreateContactMutation from '../graphql/CreateContactMutation'
import ContactEditForm from '../components/ContactEditForm'
import { appName } from '../consts'

// eslint-disable-next-line no-unused-vars
const log = debug(appName + ':ContactCreatePage.js')

export default class extends React.Component {
  _handleSave = (data) => {
    CreateContactMutation.commit(environment, data)
    this.props.history.push('/contacts')
  }

  _handleCancel = () => {
    this.props.history.push('/contacts')
  }

  render() {
    return (<article>
      <ContactEditForm onSave={this._handleSave} onCancel={this._handleCancel} />
    </article>)
  }
}
