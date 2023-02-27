import debug from 'debug'
import React from 'react'
import { createPaginationContainer, graphql, RelayPaginationProp } from 'react-relay'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'

import { appName } from '../consts'
import AutoLoadMore from '../components/AutoLoadMore'
import PlainContactsTable from '../components/PlainContactsTable'
import DeleteContactMutation from '../graphql/DeleteContactMutation'
import styles from '../App.module.css'
import Contact from '../types/Contact'

// eslint-disable-next-line no-unused-vars
const log = debug(appName + ':ScrollingPaginationContactsTable.js')

interface Props {
  contactsData: any,
  readonly?: boolean,
  relay: RelayPaginationProp,
}

interface State {
  contactToDelete: Contact | null,
}

class ScrollingPaginationContactsTableBare extends React.Component<Props, State> {
  state: State = {
    contactToDelete: null,
  }

  render() {
    const { contactsData, relay: { hasMore }, readonly } = this.props
    const { contactToDelete } = this.state
    const items = contactsData.allContacts.edges
      .filter((e: any) => e && e.node)
      .map((e: any) => e.node)

    return (
      <article>
        <PlainContactsTable items={items} onDeleteClick={this._handleDeleteClick} readonly={readonly} />
        <AutoLoadMore hasMore={hasMore()} onLoadMore={this._loadMore}>
          <Button
            color="primary"
            className={styles.loadMoreButton}
            onClick={this._loadMore}
            title="Load More">Load more</Button>
        </AutoLoadMore>
        <Dialog
          open={!!this.state.contactToDelete}
          onClose={this._cancelDelete}
          title='Confirm delete'>
          {contactToDelete && <p>Do you realy want to delete {contactToDelete.firstName} {contactToDelete.lastName}?</p>}
          <DialogActions>
            <Button onClick={this._cancelDelete}>Cancel</Button>
            <Button
              onClick={this._handleDeleteConfirmation}
              variant="contained"
              autoFocus
            >
               Delete
            </Button>
          </DialogActions>
        </Dialog>
      </article>
    )
  }

  _handleDeleteClick = (contact: Contact) => {
    this.setState({ contactToDelete: contact })
  }

  _handleDeleteConfirmation = () => {
    if (this.state.contactToDelete) {
      DeleteContactMutation.commit(this.props.relay.environment, this.state.contactToDelete)
      this.setState({ contactToDelete: null })
    }
  }

  _cancelDelete = () => {
    this.setState({ contactToDelete: null })
  }

  _loadMore = () => {
    if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
      return
    }

    this.props.relay.loadMore(
      10,  // Fetch the next n items
      (error) => {
        if (error) {
          log('loadMore error', error)
        }
      },
    )
  }

  // dialogConfirmDeleteActions = [
  //   { label: 'Cancel', onClick: this._cancelDelete },
  //   { label: 'Delete', onClick: this._handleDeleteConfirmation, primary: true }
  // ]
}

export default createPaginationContainer(
  ScrollingPaginationContactsTableBare,
  {
    contactsData: graphql`
      fragment ScrollingPaginationContactsTable_contactsData on Query
        @argumentDefinitions(
          count: { type: "Int", defaultValue: 10 }
          cursor: { type: "String" }
          filterText: { type: "String" }
        ) {
          allContacts(
            first: $count
            after: $cursor
            filterText: $filterText # Non-pagination variables
          ) @connection(key: "ScrollingPaginationContactsTable_allContacts") {
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
`,
  },
  {
    direction: 'forward',
    getVariables(props, { count, cursor }, fragmentVariables) {
      return {
        count,
        cursor,
        filterText: fragmentVariables && fragmentVariables.filterText,
      }
    },
    // Pagination query to be fetched upon calling `loadMore`.
    // Notice that we re-use our fragment, and the shape of this query matches our fragment spec.
    query: graphql`
      query ScrollingPaginationContactsTableQuery (
        $count: Int!
        $cursor: String
        $filterText: String
      ) {
        ...ScrollingPaginationContactsTable_contactsData @arguments(count: $count, cursor: $cursor, filterText: $filterText)
      }
    `
  }
)
