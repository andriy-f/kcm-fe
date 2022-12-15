// @flow
import debug from 'debug'
import React from 'react'

import environment from '../graphql/relayEnvironment'
import CreateContactMutation from '../graphql/CreateContactMutation'
import ContactEditForm from '../components/ContactEditForm'
import { appName } from '../consts'
import styles from '../App.module.css'

// eslint-disable-next-line no-unused-vars
const log = debug(appName + ':ContactCreatePage.js')

interface Props {
  history: {
    push(route: string): void
  }
}

class ContactCreatePage extends React.Component<any> {
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
        <h3 className={styles.kTextCenter}>Create Contact</h3>
        <ContactEditForm onSave={this._handleSave} onCancel={this._handleCancel} />
      </article>
    )
  }
}
export default ContactCreatePage
