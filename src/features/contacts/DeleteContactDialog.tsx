import { useMutation, ConnectionHandler } from 'react-relay'

import { graphql } from 'react-relay'
import Button from '@mui/material/Button'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'

import { type Contact } from '../../types/Contact'
import CircularProgress from '@mui/material/CircularProgress'
import { type PayloadError } from 'relay-runtime'

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
        onCompleted(_response, errors) {
          if (errors) {
            onError?.(errors)
          } else {
            onDelete?.()
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
