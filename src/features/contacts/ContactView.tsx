import debug from 'debug'
import React from 'react'
import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import TextField from '@mui/material/TextField'
import { Link } from 'react-router-dom'

import { appName } from '../../consts'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const log = debug(appName + ':ContactView.js')

const ContactViewQuery = graphql`
`
class ContactViewWrapper extends React.Component<any> {

  render() {
    const { firstName, lastName, email, phoneNumber } = this.props.contact

    return (
      <article>
        <TextField
          InputProps={{
            readOnly: true,
          }}
          name="firstName"
          label="First Name"
          value={firstName} />
        <TextField name="lastName"
          InputProps={{
            readOnly: true,
          }}
          label="Last Name"
          value={lastName} />
        <TextField
          name="email"
          InputProps={{
            readOnly: true,
          }}label="Email" value={email} />
        <TextField name="phoneNumber" InputProps={{
            readOnly: true,
          }} label="Phone number" value={phoneNumber} />
        <p>
          <Link to="/contacts"></Link>
          {/* Back to contact list</RTButtonLink> */}
        </p>
      </article>
    )
  }
}

export default createFragmentContainer(
  ContactViewWrapper,{
    contact: graphql`
    fragment ContactView_contact on Contact {
      firstName
      lastName
      email
      phoneNumber
    }
`
  })
