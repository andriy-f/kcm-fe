import debug from 'debug'
import React from 'react'
import { graphql, createFragmentContainer } from 'react-relay'

import { appName } from '../consts'
import UpdateContactMutation from '../graphql/UpdateContactMutation'
import ContactEditForm from '../components/ContactEditForm'

// eslint-disable-next-line no-unused-vars
const log = debug(appName + ':ContactEdit.js')

class ContactEditFormWrapper extends React.Component {
  _handleSave = (data) => {
    UpdateContactMutation.commit(this.props.relay.environment, data, this.props.contact)
    this.props.onSave()
  }

  render() {
    const { onSave, ...rest } = this.props
    return (<ContactEditForm {...rest} onSave={this._handleSave} />)
  }
}

export default createFragmentContainer(
  ContactEditFormWrapper,
  graphql`
    fragment ContactEdit_contact on Contact {
      id
      firstName
      lastName
      email
      phoneNumber
    }
`)
