import debug from 'debug'
import React from 'react'
import { useLazyLoadQuery } from 'react-relay'
import { useParams } from 'react-router-dom'
import graphql from 'babel-plugin-relay/macro'

import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'

import { appName } from '../../consts'
import type { ContactDetailsPageQuery as ContactDetailsPageQueryType } from './__generated__/ContactDetailsPageQuery.graphql'
import Title from '../common/Title'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const log = debug(appName + ':ContactDetailsPage.tsx')

const ContactDetailsPageQuery = graphql`
  query ContactDetailsPageQuery ($id: ID!) {
    contact(id: $id) {
      firstName
      lastName
      email
      phoneNumber
    }
  }
`

function ContactTextField({ label, value, disabled }: { label: string, value?: string | null, disabled: boolean }) {
  return (
    <TextField fullWidth label={label} variant="filled"
      disabled={disabled} value={value} />
  )
}

type ContactDetailsPageProps = {
  editable?: boolean
}

function ContactDetailsPage({ editable }: ContactDetailsPageProps) {
  const id = useParams().id || ''
  const data = useLazyLoadQuery<ContactDetailsPageQueryType>(ContactDetailsPageQuery, { id: id })
  if (!id) {
    return <Alert severity='error'> contactId is not defined </Alert>
  }

  const contact = data.contact
  return (
    <Container>
      <Box
        component="form"
        sx={{
          '& > div': {
            m: 1,
          }
        }}>
        <Title>Contact</Title>
        <ContactTextField label='First name' value={contact?.firstName} disabled={!editable} />
        <ContactTextField label='Last name' value={contact?.lastName} disabled={!editable} />
        <ContactTextField label='Email' value={contact?.email} disabled={!editable} />
        <ContactTextField label='Phone' value={contact?.phoneNumber} disabled={!editable} />
      </Box>
    </Container>)
}

export default ContactDetailsPage
