import gql from 'graphql-tag'

export const findContactsWithCountQry = gql`
  query findContactsWithCount($limit: Int, $skip: Int, $filter: ContactFilterInput) {
    contacts(limit: $limit, skip: $skip, filter: $filter) {
      _id
      firstName
      lastName
      email
      phoneNumber
    }
    contactCount
  }
`

export const findContactQry = gql`
  query FindOneContact($id: String!) {
    contact(_id: $id) {
      _id
      firstName
      lastName
      email
      phoneNumber
    }
  }
`
