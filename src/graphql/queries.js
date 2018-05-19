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

export const createContactQry = gql`
  mutation CreateContact ($contact: ContactInput!) {
    createContact (contact: $contact) {
      _id
      firstName
      lastName
      email
      phoneNumber
    }
  }
`

export const updateContactQry = gql`
  mutation UpdateContact ($id: String!, $contact: ContactInput!) {
    updateContact (_id: $id, contact: $contact) {
      _id
      firstName
      lastName
      email
      phoneNumber
    }
  }
`

export const deleteContactQry = gql`
  mutation DeleteContact ($id: String!) {
    deleteContact (_id: $id) {
      _id
    }
  }
`
