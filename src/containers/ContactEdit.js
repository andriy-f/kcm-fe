import debug from 'debug'
import React, { Component } from 'react'
import { graphql, createFragmentContainer } from 'react-relay'
import { Input } from 'react-toolbox/lib/input'
import { Button } from 'react-toolbox/lib/button'

import { appName } from '../consts'
import { RTButtonLink } from '../components/RTButtonLink'
import { kFormContainer, kTextCenter } from '../App.css'
import UpdateContactMutation from '../graphql/UpdateContactMutation'

// eslint-disable-next-line no-unused-vars
const log = debug(appName + ':ContactEdit.js')

class ContactEditForm extends Component {
  constructor(props) {
    super(props)

    const { firstName, lastName, email, phoneNumber } = props.contact
    this.state = {
      firstName,
      lastName,
      email,
      phoneNumber,
    }
  }

  render() {

    const { firstName, lastName, email, phoneNumber } = this.state
    return (
      <section className={kFormContainer}>
        <form onSubmit={this._handleSubmit} method="post">

          <h3 className={kTextCenter}>Edit Contact</h3>

          <Input autoFocus={true} name="firstName" label="First Name" value={firstName} onChange={this._handleInputChange} />
          <Input name="lastName" label="Last Name" value={lastName} onChange={this._handleInputChange} />
          <Input name="email" label="Email" value={email} onChange={this._handleInputChange} />
          <Input name="phoneNumber" label="Phone number" value={phoneNumber} onChange={this._handleInputChange} />

          <div className={kTextCenter}>
            <Button label="Save" type="submit" flat />
            <RTButtonLink label="Cancel" to="/contacts" />
          </div>
        </form>
      </section>
    )
  }

  _handleInputChange = (value, event) => {
    const target = event.target
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  _handleSubmit = (e) => {
    e.preventDefault()
    UpdateContactMutation.commit(this.props.relay.environment, this.state, this.props.contact)
    this.props.onSave && this.props.onSave()
  }
}

export default createFragmentContainer(
  ContactEditForm,
  graphql`
    fragment ContactEdit_contact on Contact {
      id
      firstName
      lastName
      email
      phoneNumber
    }
`)
