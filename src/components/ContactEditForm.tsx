// @flow
import debug from 'debug'
import React, { ChangeEvent } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import styles from '../App.module.css'
import { appName } from '../consts'
import Contact from '../types/Contact'

// eslint-disable-next-line no-unused-vars
const log = debug(appName + ':ContactEditForm.js')

type Props = {
  onSave(data: any): void,
  onCancel(): void,
  contact?: Contact,
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
          <TextField autoFocus={true} required name="firstName" label="First Name" value={firstName} onChange={this._handleInputChange} />
          <TextField name="lastName" required label="Last Name" value={lastName} onChange={this._handleInputChange} />
          <TextField name="email" label="Email" value={email} onChange={this._handleInputChange} />
          <TextField name="phoneNumber" label="Phone number" value={phoneNumber} onChange={this._handleInputChange} />

          <div className={styles.kTextCenter}>
            <Button variant="contained">Save</Button>
            <Button variant="outlined" onClick={this.props.onCancel} >Cancel</Button>
          </div>
        </form>
      </section>
    )
  }

  _handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const value = event.target.value

    if(name in this.state) {
      // @ts-ignore
      this.setState({ [name]: value })
    }
  }

  _handleSubmit = (e: any) => {
    e.preventDefault()
    this.props.onSave(this.state)
  }
}

export default ContactEditForm
