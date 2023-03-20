import Button from '@mui/material/Button'
import { usePaginationFragment } from 'react-relay'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import graphql from 'babel-plugin-relay/macro'

import { ContactsTableFragment$key } from './__generated__/ContactsTableFragment.graphql'
import Title from '../common/Title'
import AutoLoadMore from '../../components/AutoLoadMore'

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

function ContactsTable({ contacts }: { contacts: ContactsTableFragment$key }) {
  const {
    data,
    loadNext,
    hasNext,
    isLoadingNext
  } = usePaginationFragment(ContactsTableFragment, contacts)
  const contactEdges = data.allContacts?.edges
  const handlePageEndReached = () => {
    loadNext(12)
  }
  return (
    <>
      <Title>Contacts</Title>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>First</TableCell>
            <TableCell>Last</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contactEdges?.map((c) => (
            <TableRow key={c?.node?.id}>
              <TableCell>{c?.node?.firstName}</TableCell>
              <TableCell>{c?.node?.lastName}</TableCell>
              <TableCell>{c?.node?.email}</TableCell>
              <TableCell>{c?.node?.phoneNumber}</TableCell>
              <TableCell align="right">Edit</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {hasNext && (
        <AutoLoadMore
          hasMore={hasNext}
          onLoadMore={handlePageEndReached}>
          <Button
            onClick={handlePageEndReached}
            disabled={isLoadingNext}
          >More</Button>
        </AutoLoadMore>
      )}
    </>
  )
}

export default ContactsTable
