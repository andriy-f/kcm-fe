import React from 'react'
import debug from 'debug'
import { useLazyLoadQuery, useMutation } from 'react-relay'
import { useNavigate, useParams } from 'react-router-dom'
import { graphql } from 'react-relay'

import Container from '@mui/material/Container'
import Alert from '@mui/material/Alert'

import { appName } from '../../consts'
import type { ContactDetailsPageQuery as ContactDetailsPageQueryType } from './__generated__/ContactDetailsPageQuery.graphql'
import ContactDetails from './ContactDetails'
import LinearProgress from '@mui/material/LinearProgress'
import Contact from '../../types/Contact'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const log = debug(appName + ':ContactDetailsPage.tsx')

const ContactDetailsPageQuery = graphql`
  query ContactDetailsPageQuery ($id: ID!) {
    contact(id: $id) {
      id
      firstName
      lastName
      email
      phoneNumber
    }
  }
`

const ContactDetailsPageContactUpdateMutation = graphql`
  mutation ContactDetailsPageContactUpdateMutation ($input: UpdateContactInput!) {
    updateContact (input: $input) {
      contact {
        id
        firstName
        lastName
        email
        phoneNumber
      }
    }
  }
`

type ContactDetailsPageProps = {
  editable?: boolean
}

function ContactDetailsPage({ editable }: ContactDetailsPageProps) {
  const id = useParams().id || ''
  const data = useLazyLoadQuery<ContactDetailsPageQueryType>(ContactDetailsPageQuery, { id: id })
  const [commitMutation, isMutationInFlight] = useMutation(ContactDetailsPageContactUpdateMutation)
  const navigate = useNavigate()

  if (!id) {
    return <Alert severity='error'> id is requred </Alert>
  }

  function handleSave(contact: Contact) {
    commitMutation({
      variables: {
        input: {
          id: id,
          firstName: contact?.firstName,
          lastName: contact?.lastName,
          email: contact?.email,
          phoneNumber: contact?.phoneNumber,
        }
      }
    })
    navigate('/contacts')
  }

  function handleCancel() {
    navigate('/contacts') // TODO consirer use react-router action
  }

  const contact = data.contact
  return (
    <Container>
      {contact && <ContactDetails
        initialContact={contact}
        editable={editable}
        onSave={handleSave}
        onCancel={handleCancel}
      />}
      {isMutationInFlight && <LinearProgress />}
    </Container>)
}

export default ContactDetailsPage
