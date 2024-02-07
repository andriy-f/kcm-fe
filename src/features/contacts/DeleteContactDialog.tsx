import React from 'react'
import debug from 'debug'
import { useMutation, ConnectionHandler } from 'react-relay'

import { graphql } from 'react-relay'
import Button from '@mui/material/Button'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'

import { appName } from '../../consts'
import Contact from '../../types/Contact'
import CircularProgress from '@mui/material/CircularProgress'
import { PayloadError } from 'relay-runtime'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const log = debug(appName + ':DeleteContactDialog.tsx')

const DeleteContactDialogDeleteContactMutation = graphql`
  mutation DeleteContactDialogDeleteContactMutation (
    $input: DeleteContactInput!
    $connections: [ID!]!
  ) {
    deleteContact (input: $input) {
      deletedId @deleteEdge(connections: $connections)
      clientMutationId
    }
  }
`

export function DeleteContactDialog({
  open, contact, onDelete, onCancel, onError
}: {
  open: boolean
  contact: Contact | null
  onDelete?: () => void
  onCancel?: () => void
  onError?: (errors: PayloadError[]) => void
}) {

  const [commitDeleteMutation, isMutationInProgress] = useMutation(DeleteContactDialogDeleteContactMutation)

  const handleConfirmClick = () => {

    const connectionId = ConnectionHandler.getConnectionID('client:root', 'ContactsTableFragment_allContacts')
    if (contact) {
      commitDeleteMutation({
        variables: {
          input: {
            id: contact.id,
          },
          connections: [connectionId]
        },
        onCompleted(response, errors) {
          if (errors) {
            onError && onError(errors)
          } else {
            onDelete && onDelete()
          }
        },
      })
    }
  }

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
      <DialogActions>
        {onCancel && <Button onClick={onCancel}>No</Button>}
        {contact && <Button
          autoFocus
          variant='contained'
          onClick={handleConfirmClick}
          disabled={isMutationInProgress}
        >
          Yes
          {isMutationInProgress && <CircularProgress size={24} />}
        </Button>}
      </DialogActions>
    </Dialog>
  )
}
