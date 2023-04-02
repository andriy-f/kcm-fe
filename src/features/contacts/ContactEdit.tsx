import debug from 'debug'
import React from 'react'
import { graphql, createFragmentContainer, RelayProp } from 'react-relay'

import { appName } from '../../consts'
import UpdateContactMutation from '../../graphql/UpdateContactMutation'
import ContactEditForm from './ContactEditForm'
import Contact from '../../types/Contact'

// eslint-disable-next-line no-unused-vars
const log = debug(appName + ':ContactEdit.js')

type Props = {
  relay: RelayProp,
  onSave(): void
  onCancel(): void
  contact: Contact
}
class ContactEditFormWrapper extends React.Component<Props> {
  _handleSave = (data: any) => {
    UpdateContactMutation.commit(this.props.relay.environment, data, this.props.contact)
    this.props.onSave()
  }

  render() {
    const { onSave, onCancel, contact, ...rest } = this.props
    return (<ContactEditForm
        {...rest}
        onSave={this._handleSave}
        onCancel={this.props.onCancel}
        contact={this.props.contact} />)
  }
}

export default createFragmentContainer(
  ContactEditFormWrapper,
  { contact: graphql`
    fragment ContactEdit_contact on Contact {
      id
      firstName
      lastName
      email
      phoneNumber
    }
`})
