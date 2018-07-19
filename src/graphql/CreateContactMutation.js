// @flow
import { graphql, commitMutation, Environment } from 'react-relay'

const mutation = graphql`
  mutation CreateContactMutation ($input: CreateContactInput!) {
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

const getOptimisticResponse = (data) => {
  return {
    createContact: {
      contact: {
        ...data,
        //id: todo what should be here
      },
    },
  }
}

const commit = (
  environment: Environment,
  data: Object,
) => {
  // Now we just call commitMutation with the appropriate parameters
  return commitMutation(
    environment,
    {
      mutation,
      variables: {
        input: data,
      },
      optimisticResponse: getOptimisticResponse(data),
    }
  )
}

export default { commit }
