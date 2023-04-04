import debug from 'debug'
import React from 'react'
import Container from '@mui/material/Container'
import graphql from 'babel-plugin-relay/macro'

import { appName } from '../../consts'
import styles from '../../App.module.css'
import Title from '../common/Title'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'

// eslint-disable-next-line no-unused-vars
const log = debug(appName + ':ContactDetailsPage.js')


function ContactDetailsPage() {

  const _handleGoBack = () => {
  }

  const data = graphql`
    query ContactDetailsPageQuery ($id: ID!) {
      contact(id: $id) {
        firstName
        lastName
        email
        phoneNumber
      }
    }
  `

  return (
    <Container>
      <Box
        component="form">
        <Title>Contact</Title>
        <TextField label="First name" variant="filled" disabled value='to fill' />
        <TextField label="Last name" variant="filled" disabled value='to fill' />
      </Box>
    </Container>)
}

export default ContactDetailsPage
