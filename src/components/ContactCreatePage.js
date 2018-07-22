// @flow
import debug from 'debug'
import React from 'react'

import environment from '../graphql/relayEnvironment'
import CreateContactMutation from '../graphql/CreateContactMutation'
import ContactEditForm from '../components/ContactEditForm'
import { appName } from '../consts'
import { kTextCenter } from '../App.css'

// eslint-disable-next-line no-unused-vars
const log = debug(appName + ':ContactCreatePage.js')

type Props = {
  history: {
    push(route: string): void
  }
}

export default class extends React.Component<Props> {
  _handleSave = (data: Object) => {
    CreateContactMutation.commit(environment, data)
    this.props.history.push('/contacts')
  }

  _handleCancel = () => {
    this.props.history.push('/contacts')
  }

  render() {
    return (
      <article>
        <h3 className={kTextCenter}>Create Contact</h3>
        <ContactEditForm onSave={this._handleSave} onCancel={this._handleCancel} />
      </article>
    )
  }
}
