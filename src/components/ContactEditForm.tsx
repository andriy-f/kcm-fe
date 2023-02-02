// @flow
import debug from 'debug'
import React from 'react'
import Input from '@mui/material/Input'
import Button from '@mui/material/Button'

import styles from '../App.module.css'
import { appName } from '../consts'

// eslint-disable-next-line no-unused-vars
const log = debug(appName + ':ContactEditForm.js')

type Props = {
  onSave(data: any): void,
  onCancel(): void,
  contact?: object,
}

type State = {
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string,
}

class ContactEditForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    const { firstName, lastName, email, phoneNumber } = props.contact || {}
    this.state = {
      firstName: firstName || '',
      lastName: lastName || '',
      email: email || '',
      phoneNumber: phoneNumber || '',
    }
  }

  render() {

    const { firstName, lastName, email, phoneNumber } = this.state
    return (
      <section className={styles.kFormContainer}>
        <form onSubmit={this._handleSubmit} method="post">
          <Input autoFocus={true} required name="firstName" label="First Name" value={firstName} onChange={this._handleInputChange} />
          <Input name="lastName" required label="Last Name" value={lastName} onChange={this._handleInputChange} />
          <Input name="email" label="Email" value={email} onChange={this._handleInputChange} />
          <Input name="phoneNumber" label="Phone number" value={phoneNumber} onChange={this._handleInputChange} />

          <div className={styles.kTextCenter}>
            <Button label="Save" type="submit" flat />
            <Button label="Cancel" onClick={this.props.onCancel} />
          </div>
        </form>
      </section>
    )
  }

  _handleInputChange = (value: string, event: any) => {
    const target = event.target
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  _handleSubmit = (e: any) => {
    e.preventDefault()
    this.props.onSave(this.state)
  }
}

export default ContactEditForm
