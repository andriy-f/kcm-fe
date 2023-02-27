import Button from '@mui/material/Button'
import { usePaginationFragment } from 'react-relay'
import { graphql } from 'relay-runtime'

import { ContactsTableFragment$key } from './__generated__/ContactsTableFragment.graphql'


const ContactsTableFragment = graphql`
fragment ContactsTableFragment on Query
  @refetchable(queryName: "ContactsTableRefetchQuery")
  @argumentDefinitions(
    count: { type: "Int", defaultValue: 10 }
    cursor: { type: "String" }
    filterText: { type: "String" }
  ) {
    allContacts(
      first: $count
      after: $cursor
      filterText: $filterText # Non-pagination variables
    ) @connection(key: "ContactsTableFragment_allContacts") {
      edges {
        node {
          id
          firstName
          lastName
          email
          phoneNumber
        }
      }
    }
  }
`

function ContactsTable({ contacts }: { contacts: ContactsTableFragment$key}) {
  const {
    data,
    loadNext,
    hasNext,
    isLoadingNext
  } = usePaginationFragment(ContactsTableFragment, contacts)
  const contactEdges = data.allContacts?.edges
  const handlePageEndReached = () => {
    loadNext(3)
  }
  return (
    <>
      {contactEdges?.map(e => <div>{e?.node?.firstName}</div>)}
      <Button onClick={handlePageEndReached}>More</Button>
    </>
  )
}

export default ContactsTable
