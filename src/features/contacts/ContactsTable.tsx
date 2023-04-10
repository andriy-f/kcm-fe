/**
 * TODO: add, edit, delete, view
 */
import React, { useRef, useTransition } from 'react'
import Button from '@mui/material/Button'
import { usePaginationFragment } from 'react-relay'
import { debounce } from 'throttle-debounce'
import graphql from 'babel-plugin-relay/macro'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TextField from '@mui/material/TextField'
import CircularProgress from '@mui/material/CircularProgress'
import IconButton from '@mui/material/IconButton'
import PageviewIcon from '@mui/icons-material/Pageview'
import EditIcon from '@mui/icons-material/Edit'

import { ContactsTableFragment$key } from './__generated__/ContactsTableFragment.graphql'
import Title from '../common/Title'
import AutoLoadMore from '../common/AutoLoadMore'
import { Link } from 'react-router-dom'

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
    isLoadingNext,
    refetch,
  } = usePaginationFragment(ContactsTableFragment, contacts)
  const contactEdges = data.allContacts?.edges
  const handlePageEndReached = () => { loadNext(12) }

  // Search-related
  const [filterText, setFilterText] = React.useState('')
  const [isPending, startTransition] = useTransition()
  const refetchDebouncedRef = useRef(debounce(200, (filterText: string) => {
    startTransition(() => {
      refetch({ filterText })
    })
  }))
  const handleFilterChange: React.ChangeEventHandler<HTMLInputElement> =
    (e) => {
      const value = e.target.value
      setFilterText(value)
      refetchDebouncedRef.current(value)
    }

  return (
    <>
      <Title>Contacts</Title>
      <TextField label='Search' variant='filled'
        value={filterText} onChange={handleFilterChange} />
      {isPending && <CircularProgress />}
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
          {contactEdges?.map((contactEdge) => {
            const contact = contactEdge?.node
            return (
              <TableRow key={contact?.id}>
                <TableCell>{contact?.firstName}</TableCell>
                <TableCell>{contact?.lastName}</TableCell>
                <TableCell>{contact?.email}</TableCell>
                <TableCell>{contact?.phoneNumber}</TableCell>
                <TableCell align="right">
                  <IconButton component={Link} to={'/contact/' + contact?.id}>
                    <PageviewIcon />
                  </IconButton>
                  <IconButton component={Link} to={'/contact/' + contact?.id + '/edit'}>
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            )
          })}
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
