import gql from 'graphql-tag'

export const findContactQry = gql`
  query FindOneContact ($id: String!) {
    contact (_id: $id) {
      _id
      firstName
      lastName
      email
      phoneNumber
    }
  }
`
