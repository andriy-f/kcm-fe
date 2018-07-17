import React from 'react'
import { graphql, createFragmentContainer } from 'react-relay'

class ContactViewBare extends React.Component {
  render () {
    const { firstName, lastName, email } = this.props.contact || {}
    return (<div>
      <div>F: {firstName}</div>
      <div>L: {lastName}</div>
      <div>E: {email}</div>
    </div>)
  }
}

export default createFragmentContainer(
  ContactViewBare,
  graphql`
    fragment ContactView_contact on Contact {
      id
      contactId
      firstName
      lastName
      email
      phoneNumber
    }
  `
)
