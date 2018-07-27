// @flow
import debug from 'debug'
import React from 'react'
import { createPaginationContainer, graphql } from 'react-relay'
import Dialog from 'react-toolbox/lib/dialog'
import { Button } from 'react-toolbox/lib/button'

import { appName } from '../consts'
import AutoLoadMore from '../components/AutoLoadMore'
import PlainContactsTable from '../components/PlainContactsTable'
import DeleteContactMutation from '../graphql/DeleteContactMutation'
import { loadMoreButton } from '../App.css'

// eslint-disable-next-line no-unused-vars
const log = debug(appName + ':ScrollingPaginationContactsTable.js')

type Props = {
  contactsData: any,
  relay: any,
  readonly?: boolean,
  // relay: {
  //   environment: Environment,
  //   loadMore(pageSize: number, callback: ?(error: ?Error) => void): any,
  //   hasMore(): boolean,
  //   isLoading(): boolean,
  // }
}

type State = {
  contactToDelete: Object | null,
}

class ScrollingPaginationContactsTableBare extends React.Component<Props, State> {
  state = {
    contactToDelete: null,
  }

  render() {
    const { contactsData, relay: { hasMore }, readonly } = this.props
    const { contactToDelete } = this.state
    const items = contactsData.allContacts.edges
      .filter(e => e && e.node)
      .map(e => e.node)

    return (
      <article>
        <PlainContactsTable items={items} onDeleteClick={this._handleDeleteClick} readonly={readonly} />
        <AutoLoadMore hasMore={hasMore()} onLoadMore={this._loadMore}>
          <Button
            primary
            className={loadMoreButton}
            onClick={this._loadMore}
            title="Load More">Load more</Button>
        </AutoLoadMore>
        <Dialog
          actions={this.dialogConfirmDeleteActions}
          active={!!this.state.contactToDelete}
          onEscKeyDown={this._cancelDelete}
          onOverlayClick={this._cancelDelete}
          title='Confirm delete'>
          {contactToDelete && <p>Do you realy want to delete {contactToDelete.firstName} {contactToDelete.lastName}?</p>}
        </Dialog>
      </article>
    )
  }

  _handleDeleteClick = (contact) => {
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

  dialogConfirmDeleteActions = [
    { label: 'Cancel', onClick: this._cancelDelete },
    { label: 'Delete', onClick: this._handleDeleteConfirmation, primary: true }
  ]
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
