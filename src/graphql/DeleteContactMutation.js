// @flow
import { graphql, commitMutation, Environment } from 'react-relay'

const mutation = graphql`
  mutation DeleteContactMutation ($input: DeleteContactInput!) {
    deleteContact (input: $input) {
      id
      clientMutationId
    }
  }
`

const getOptimisticResponse = (contact) => {
  return {
    deleteContact: {
      id: contact.id,
      clientMutationId: null,
    },
  }
}

const commit = (
  environment: Environment,
  contact: Object,
) => {
  // Now we just call commitMutation with the appropriate parameters
  return commitMutation(
    environment,
    {
      mutation,
      variables: {
        input: { id: contact.id },
      },
      optimisticResponse: getOptimisticResponse(contact),
      configs: [{
        type: 'NODE_DELETE',
        deletedIDFieldName: 'id',
      }]
    }
  )
}

export default { commit }
