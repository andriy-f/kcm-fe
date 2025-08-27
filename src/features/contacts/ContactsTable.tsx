import React, { useTransition } from 'react'
import debug from 'debug'
import { type PayloadError } from 'relay-runtime'
import { usePaginationFragment } from 'react-relay'
import { Link as RRLink } from 'react-router-dom'
import { useDebouncedCallback } from 'use-debounce'
import { graphql } from 'react-relay'

import Button from '@mui/material/Button'
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
import DeleteIcon from '@mui/icons-material/Delete'
import Link from '@mui/material/Link'

import { type ContactsTableFragment$key } from './__generated__/ContactsTableFragment.graphql'
import Title from '../common/Title'
import AutoLoadMore from '../common/AutoLoadMore'
import { type Contact } from '../../types/Contact'
import { appName } from '../../consts'
import { DeleteContactDialog } from './DeleteContactDialog'

const log = debug(appName + ':ContactsTable.tsx')

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
  const [isPending, startTransition] = useTransition()
  const debouncedRefetch = useDebouncedCallback((value: string) => {
    startTransition(() => {
      refetch({ filterText: value })
    })
  }, 200)

  // Delete-related
  const [deleteDialogContact, setDeleteDialogContact] = React.useState<Contact | null>(null)

  const handleDeleteClick = (contact: Contact) => {
    setDeleteDialogContact(contact)
  }

  const handleDeleted = () => {
    setDeleteDialogContact(null)
  }

  const handleDeleteCancel = () => {
    setDeleteDialogContact(null)
  }

  const handleDeleteError = (errors: PayloadError[]) => {
    log(errors)
  }

  return (
    <>
      <Title>Contacts</Title>
      <TextField
        label='Search'
        defaultValue={''}
        variant='filled'
        onChange={(e) => {
          debouncedRefetch(e.target.value)
        }}
      />
      {isPending && <CircularProgress />}
      <DeleteContactDialog
        open={!!deleteDialogContact}
        contact={deleteDialogContact}
        onDelete={handleDeleted}
        onCancel={handleDeleteCancel}
        onError={handleDeleteError}
      />
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
            const contactViewLink = contact ? '/contact/' + contact.id : ''
            return contact && (
              <TableRow key={contact.id}>
                <TableCell>
                  <RRLink to={contactViewLink}>
                    {contact.firstName}
                  </RRLink>
                </TableCell>
                <TableCell>
                  <RRLink to={contactViewLink}>
                    {contact.lastName}
                  </RRLink>
                </TableCell>
                <TableCell>
                  <Link href={'mailto:' + contact.email} target='_blank' rel='noreferrer'>
                    {contact.email}
                  </Link>
                </TableCell>
                <TableCell>
                  <Link href={'tel:' + contact.phoneNumber} target='_blank' rel='noreferrer'>
                    {contact.phoneNumber}
                  </Link>
                </TableCell>
                <TableCell align="right">
                  <IconButton component={RRLink} to={contactViewLink}>
                    <PageviewIcon />
                  </IconButton>
                  <IconButton component={RRLink} to={contactViewLink + '/edit'}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => { handleDeleteClick(contact) }}>
                    <DeleteIcon />
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
