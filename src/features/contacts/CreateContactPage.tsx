import { ConnectionHandler, useMutation } from 'react-relay'
import { useNavigate } from 'react-router-dom'
import { graphql } from 'react-relay'

import Container from '@mui/material/Container'
import LinearProgress from '@mui/material/LinearProgress'

import ContactDetails from './ContactDetails'
import type Contact from '../../types/Contact'

// TODO: @appendNode or @appendEdge?
const CreateContactPageContactCreateMutation = graphql`
  mutation CreateContactPageContactCreateMutation (
    $input: CreateContactInput!
    $connections: [ID!]!
    ) {
    createContact (input: $input) {
      contact @appendNode(connections: $connections, edgeTypeName: "ContactEdge") {
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

  const [commitMutation, isMutationInFlight] = useMutation(CreateContactPageContactCreateMutation)
  const navigate = useNavigate()

  function handleSave(contact: Contact) {
    const connectionId = ConnectionHandler.getConnectionID('client:root', 'ContactsTableFragment_allContacts')
    commitMutation({
      variables: {
        input: {
          firstName: contact.firstName,
          lastName: contact.lastName,
          email: contact.email,
          phoneNumber: contact.phoneNumber,
        },
        connections: [connectionId]
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
