import React, { useRef, useTransition } from 'react'
import debug from 'debug'
import { useMutation, usePaginationFragment, ConnectionHandler } from 'react-relay'
import { Link as RRLink } from 'react-router-dom'
import { debounce } from 'throttle-debounce'
import graphql from 'babel-plugin-relay/macro'

import Button from '@mui/material/Button'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
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
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'

import { ContactsTableFragment$key } from './__generated__/ContactsTableFragment.graphql'
import Title from '../common/Title'
import AutoLoadMore from '../common/AutoLoadMore'
import Contact from '../../types/Contact'
import { appName } from '../../consts'
import Link from '@mui/material/Link'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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

const ContactsTableContactDeleteMutation = graphql`
  mutation ContactsTableContactDeleteMutation (
    $input: DeleteContactInput!
    $connections: [ID!]!
  ) {
    deleteContact (input: $input) {
      deletedId @deleteEdge(connections: $connections)
      clientMutationId
    }
  }
`

function DeleteContactDialog({
  open,
  contact,
  onConfirm,
  onCancel,
}: {
  open: boolean
  contact: Contact | null
  onConfirm(): void
  onCancel(): void
}) {

  return (
    <Dialog
      open={open}
      onClose={onCancel}>
      <DialogTitle>Delete contact?</DialogTitle>
      <DialogContent>
        {contact && <DialogContentText>
          {contact.firstName} {contact.lastName}
        </DialogContentText>}
      </DialogContent>
      <DialogActions >
        <Button onClick={onCancel}>No</Button>
        <Button autoFocus variant='contained' onClick={onConfirm}>Yes</Button>
      </DialogActions>
    </Dialog>
  )
}

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

  // Delete-related
  const [commitDeleteMutation] = useMutation(ContactsTableContactDeleteMutation)
  const [deleteDialogContact, setDeleteDialogContact] = React.useState<Contact | null>(null)

  const handleDeleteClick = (contact: Contact) => {
    setDeleteDialogContact(contact)
  }

  const handleDeleteConfirm = () => {
    if (deleteDialogContact) {
      const connectionId = ConnectionHandler.getConnectionID('client:root', 'ContactsTableFragment_allContacts')
      commitDeleteMutation({
        variables: {
          input: {
            id: deleteDialogContact.id,
          },
          connections: [connectionId]
        },
        onCompleted(response, errors) {
          if (errors) {
            log(errors)
          } else {
            setDeleteDialogContact(null)
          }
        },
      })
    }
  }

  const handleDeleteCancel = () => {
    setDeleteDialogContact(null)
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
            return contact && (
              <TableRow key={contact.id}>
                <TableCell>{contact.firstName}</TableCell>
                <TableCell>{contact.lastName}</TableCell>
                <TableCell>
                  <Link href={'mailto:' + contact.email} target='_blank'>
                    {contact.email}
                  </Link>
                </TableCell>
                <TableCell>
                  <Link href={'tel:' + contact.phoneNumber} target='_blank'>
                    {contact.phoneNumber}
                  </Link>
                </TableCell>
                <TableCell align="right">
                  <IconButton component={RRLink} to={'/contact/' + contact.id}>
                    <PageviewIcon />
                  </IconButton>
                  <IconButton component={RRLink} to={'/contact/' + contact.id + '/edit'}>
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
      <DeleteContactDialog
        open={!!deleteDialogContact}
        contact={deleteDialogContact}
        onConfirm={handleDeleteConfirm}
        onCancel={handleDeleteCancel} />
    </>
  )
}

export default ContactsTable
