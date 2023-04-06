import debug from 'debug'
import React from 'react'
import { useLazyLoadQuery } from 'react-relay'
import Container from '@mui/material/Container'
import { useParams } from 'react-router-dom'
import graphql from 'babel-plugin-relay/macro'

import { appName } from '../../consts'
import type { ContactDetailsPageQuery as ContactDetailsPageQueryType } from './__generated__/ContactDetailsPageQuery.graphql'
import Title from '../common/Title'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'

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


function ContactDetailsPage() {
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
        <TextField fullWidth label="First name" variant="filled"
          InputProps={{ readOnly: true }}
          value={contact?.firstName} />
        <TextField fullWidth label="Last name" variant="filled"
          disabled value={contact?.lastName} />
      </Box>
    </Container>)
}

export default ContactDetailsPage
