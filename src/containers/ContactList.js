// @flow
import debug from 'debug'
import React from 'react'
import { createPaginationContainer, graphql } from 'react-relay'
import Dialog from 'react-toolbox/lib/dialog'
import { Input } from 'react-toolbox/lib/input'

import type { ContactList_contactsData } from './__generated__/ContactList_contactsData.graphql'
import { appName } from '../consts'
import ContactTable from '../components/ContactTable'
import DeleteContactMutation from '../graphql/DeleteContactMutation'
import { contactsFilter } from '../App.css'

// eslint-disable-next-line no-unused-vars
const log = debug(appName + ':ContactList.js')

type Props = {
  contactsData: ContactList_contactsData,
  relay: Object,
  contactToDeleteId: string,
}

type State = {
  contactToDelete: Object | null,
  filterText: string,
}

class ContactListBare extends React.Component<Props, State> {
  state = {
    contactToDelete: null,
    filterText: '',
  }

  render() {
    const { contactsData } = this.props
    const { contactToDelete, filterText } = this.state
    const items = (contactsData
      && contactsData.allContacts
      && contactsData.allContacts.edges
      && contactsData.allContacts.edges
        .filter(e => e && e.node)
        .map(e => (e && e.node) || {})) || undefined // Relay generated type defs are wrong

    return (
      <article>
        <Input type="text" label="Filter" className={contactsFilter} value={filterText}
          onChange={this._handleFilterChange} />
        <ContactTable items={items} onDeleteClick={this._onDeleteClickHandler} />
        <button
          onClick={() => this._loadMore()}
          title="Load More">Load more</button>
        <Dialog
          actions={this.dialogConfirmDeleteActions}
          active={!!this.state.contactToDelete}
          onEscKeyDown={this._cancelDelete}
          onOverlayClick={this._cancelDelete}
          title='Confirm delete'
        >
          {contactToDelete && <p>Do you realy want to delete {contactToDelete.firstName} {contactToDelete.lastName}?</p>}
        </Dialog>
      </article>
    )
  }

  _handleFilterChange = (val) => {
    this.setState({ filterText: val })
    this.props.relay.refetchConnection(
      5,
      (error) => {
        if (error) {
          log('refetch error', error)
        }
      },
      { filterText: val },
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
      5,  // Fetch the next 10 feed items
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
    // getConnectionFromProps(props) {
    //   log('getConnectionFromProps props', props)
    //   return props.contactsData && props.contactsData.allContacts
    // },
    // This is also the default implementation of `getFragmentVariables` if it isn't provided.
    // getFragmentVariables(prevVars, totalCount) {
    //   log('getFragmentVariables prevVars', prevVars)
    //   log('getFragmentVariables totalCount', totalCount)
    //   return {
    //     ...prevVars,
    //     count: totalCount,
    //   }
    // },
    getVariables(props, { count, cursor }, fragmentVariables) {
      log('getVars props', props)
      log('getVars count', count)
      log('getVars cursor', cursor)
      log('getVars fragVars', fragmentVariables)

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
