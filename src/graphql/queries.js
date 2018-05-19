import gql from 'graphql-tag'

export const findContactsWithCountQry = gql`
  query findContactsWithCount($filter: ContactFilterInput, $filterText: String, $limit: Int, $skip: Int) {
    contacts(filter: $filter, filterText: $filterText, limit: $limit, skip: $skip) {
      _id
      firstName
      lastName
      email
      phoneNumber
    }
    contactCount(filter: $filter, filterText: $filterText)
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
