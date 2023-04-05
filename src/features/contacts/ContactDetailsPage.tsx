import debug from 'debug'
import React from 'react'
import { useLazyLoadQuery } from 'react-relay'
import Container from '@mui/material/Container'
import graphql from 'babel-plugin-relay/macro'

import { appName } from '../../consts'
import styles from '../../App.module.css'
import type { ContactDetailsPageQuery as ContactDetailsPageQueryType } from './__generated__/ContactDetailsPageQuery.graphql'
import Title from '../common/Title'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
// eslint-disable-next-line no-unused-vars
const log = debug(appName + ':ContactDetailsPage.js')

const ContactDetailsPageQuery = graphql`
  query ContactDetailsPageQuery ($contactId: ID!) {
    contact(contactId: $contactId) {
      firstName
      lastName
      email
      phoneNumber
    }
  }
`


function ContactDetailsPage() {
  const data = useLazyLoadQuery<ContactDetailsPageQueryType>(ContactDetailsPageQuery, { contactId: '1' })

  return (
    <Container>
      <Box
        component="form">
        <Title>Contact</Title>
        <TextField label="First name" variant="filled" disabled value={''} />
        <TextField label="Last name" variant="filled" disabled value='to fill' />
      </Box>
    </Container>)
}

export default ContactDetailsPage
