// @flow
import debug from 'debug'
import React from 'react'
import Input from '@mui/material/Input'
import Button from '@mui/material/Button'

import { kFormContainer, kTextCenter } from '../App.css'
import { appName } from '../consts'

// eslint-disable-next-line no-unused-vars
const log = debug(appName + ':ContactEditForm.js')

type Props = {
  onSave(data: any): void,
  onCancel(): void,
  contact?: Object,
}

type State = {
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string,
}

export default class extends React.Component<Props, State> {
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
      <section className={kFormContainer}>
        <form onSubmit={this._handleSubmit} method="post">
          <Input autoFocus={true} required name="firstName" label="First Name" value={firstName} onChange={this._handleInputChange} />
          <Input name="lastName" required label="Last Name" value={lastName} onChange={this._handleInputChange} />
          <Input name="email" label="Email" value={email} onChange={this._handleInputChange} />
          <Input name="phoneNumber" label="Phone number" value={phoneNumber} onChange={this._handleInputChange} />

          <div className={kTextCenter}>
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
