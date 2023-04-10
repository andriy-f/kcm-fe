import React, { useState } from 'react'

import Box from '@mui/material/Box'
import TextField, { TextFieldProps } from '@mui/material/TextField'

import Title from '../common/Title'
import Contact from '../../types/Contact'
import Button from '@mui/material/Button'

type Props = {
  editable?: boolean,
  initialContact: Contact,
  onSave: (contact: Contact) => void,
  onCancel: () => void,
}

const ContactTextField = (props: TextFieldProps) => (<TextField
  {...props}
  fullWidth
  variant='filled' />)

function ContactDetails(props: Props) {
  const { editable, initialContact, onSave } = props
  const [contactData, setContactData] = useState(initialContact)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    onSave(contactData)
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setContactData({ ...contactData, [name]: value })
  }

  return (
    <Box
      component="form"
      sx={{
        '& > div': {
          m: 1,
        }
      }}
      onSubmit={handleSubmit}
    >
      <Title>Contact</Title>
      <ContactTextField
        name='firstName'
        label='First name'
        value={contactData.firstName}
        disabled={!editable}
        onChange={handleChange}
      />
      <ContactTextField
        name='lastName'
        label='Last name'
        value={contactData.lastName}
        disabled={!editable}
        onChange={handleChange}
      />
      <ContactTextField
        name='email'
        label='Email'
        value={contactData.email}
        disabled={!editable}
        onChange={handleChange}
      />
      <ContactTextField
        name='phoneNumber'
        label='Phone'
        value={contactData.phoneNumber}
        disabled={!editable}
        onChange={handleChange}
      />

      {editable && <Button fullWidth type="submit" variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >Save</Button>}

      {<Button fullWidth variant='outlined'
        onClick={props.onCancel}
        sx={{ mt: 3, mb: 2 }}
      >Back</Button>}
    </Box>
  )
}

export default ContactDetails
