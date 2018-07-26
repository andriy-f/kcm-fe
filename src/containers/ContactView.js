// @flow
import debug from 'debug'
import React from 'react'
import { graphql, createFragmentContainer } from 'react-relay'
import { Input } from 'react-toolbox/lib/input'

import { appName } from '../consts'
import { RTButtonLink } from '../components/RTButtonLink'

// eslint-disable-next-line no-unused-vars
const log = debug(appName + ':ContactView.js')

class ContactViewWrapper extends React.Component<any> {

  render() {
    const { firstName, lastName, email, phoneNumber } = this.props.contact

    return (
      <article>
        <h2>Contact</h2>
        <Input readOnly name="firstName" label="First Name" value={firstName} />
        <Input name="lastName" readOnly label="Last Name" value={lastName} />
        <Input name="email" readOnly label="Email" value={email} />
        <Input name="phoneNumber" readOnly label="Phone number" value={phoneNumber} />
        <p>
          <RTButtonLink to="/contacts" >Back to contact list</RTButtonLink>
        </p>
      </article>
    )
  }
}

export default createFragmentContainer(
  ContactViewWrapper,
  graphql`
    fragment ContactView_contact on Contact {
      firstName
      lastName
      email
      phoneNumber
    }
`)
