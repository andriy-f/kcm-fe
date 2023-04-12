import React from 'react'
import debug from 'debug'
import { useMutation } from 'react-relay'
import { useNavigate } from 'react-router-dom'
import graphql from 'babel-plugin-relay/macro'

import Container from '@mui/material/Container'
import { appName } from '../../consts'
import ContactDetails from './ContactDetails'
import LinearProgress from '@mui/material/LinearProgress'
import Contact from '../../types/Contact'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const log = debug(appName + ':CreateContactPage.tsx')

const ContactDetailsPageContactUpdateMutation = graphql`
  mutation CreateContactPageContactCreateMutation ($input: CreateContactInput!) {
    createContact (input: $input) {
      contact {
        id
        contactId
        firstName
        lastName
        email
        phoneNumber
      }
      clientMutationId
    }
  }
`

function CreateContactPage() {

  const [commitMutation, isMutationInFlight] = useMutation(ContactDetailsPageContactUpdateMutation)
  const navigate = useNavigate()

  // TODO: consider @appendEdge when contact list is almost empty
  // so that new contact is visible without a page refresh
  function handleSave(contact: Contact) {
    commitMutation({
      variables: {
        input: {
          firstName: contact.firstName,
          lastName: contact.lastName,
          email: contact.email,
          phoneNumber: contact.phoneNumber,
        }
      }
    })
    navigate('/contacts')
  }

  function handleCancel() {
    navigate('/contacts') // TODO consirer use react-router action
  }

  // Boilerplate to create a new contact
  const contact: Contact = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  }

  return (
    <Container>
      {contact && <ContactDetails
        initialContact={contact}
        editable={true}
        onSave={handleSave}
        onCancel={handleCancel}
      />}
      {isMutationInFlight && <LinearProgress />}
    </Container>)
}

export default CreateContactPage
