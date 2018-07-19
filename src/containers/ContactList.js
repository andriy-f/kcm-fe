// @flow
import debug from 'debug'
import React from 'react'
import { createPaginationContainer, graphql } from 'react-relay'
import Dialog from 'react-toolbox/lib/dialog'

import { appName } from '../consts'
import ContactTable from '../components/ContactTable'
import DeleteContactMutation from '../graphql/DeleteContactMutation'

// eslint-disable-next-line no-unused-vars
const log = debug(appName + ':ContactList.js')

type Props = {
  contactsData: any,
  relay: Object,
}

type State = {
  contactToDelete: Object | null,
}

class ContactListBare extends React.Component<Props, State> {
  state = {
    contactToDelete: null,
  }

  render() {
    const { contactsData } = this.props
    const { contactToDelete } = this.state
    const items = contactsData.allContacts.edges
      .filter(e => e && e.node)
      .map(e => e.node)

    return (
      <article>
        <ContactTable items={items} onDeleteClick={this._onDeleteClickHandler} />
        <button
          onClick={() => this._loadMore()}
          title="Load More">Load more</button>
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

  _onDeleteClickHandler = (contact) => {
    this.setState({ contactToDelete: contact })
  }

  _deleteHandler = () => {
    if (this.state.contactToDelete) {
      DeleteContactMutation.commit(this.props.relay.environment, this.state.contactToDelete)
      this.setState({ contactToDelete: null })
    }
  }

  _cancelDelete = () => {
    this.setState({ contactToDelete: null })
  }

  _loadMore() {
    if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
      return
    }

    this.props.relay.loadMore(
      5,  // Fetch the next n items
      (error) => {
        if (error) {
          log('loadMore error', error)
        }
      },
    )
  }

  dialogConfirmDeleteActions = [
    { label: 'Cancel', onClick: this._cancelDelete },
    { label: 'Delete', onClick: this._deleteHandler, primary: true }
  ]
}

export default createPaginationContainer(
  ContactListBare,
  {
    contactsData: graphql`
      fragment ContactList_contactsData on Query
        @argumentDefinitions(
          count: { type: "Int", defaultValue: 5 }
          cursor: { type: "String" }
          filterText: { type: "String" }
        ) {
          allContacts(
            first: $count
            after: $cursor
            filterText: $filterText # Non-pagination variables
          ) @connection(key: "ContactList_allContacts") {
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
      query ContactListQuery (
        $count: Int!
        $cursor: String
        $filterText: String
      ) {
        ...ContactList_contactsData @arguments(count: $count, cursor: $cursor, filterText: $filterText)
      }
    `
  }
)
