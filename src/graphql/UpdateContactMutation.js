import { graphql, commitMutation } from 'react-relay'

const mutation = graphql`
  mutation UpdateContactMutation ($input: UpdateContactInput!) {
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

const getOptimisticResponse = (delta, contact) => {
  return {
    updateContact: {
      contact: {
        ...delta,
        id: contact.id,
      },
    },
  }
}

const commit = (
  environment,
  delta,
  contact
) => {
  // Now we just call commitMutation with the appropriate parameters
  return commitMutation(
    environment,
    {
      mutation,
      variables: {
        input: { ...delta, id: contact.id },
      },
      optimisticResponse: getOptimisticResponse(delta, contact),
    }
  )
}

export default { commit }
