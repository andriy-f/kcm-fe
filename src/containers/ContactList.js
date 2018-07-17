import debug from 'debug'
import React from 'react'
import { createPaginationContainer, graphql } from 'react-relay'
// import ContactView from '../containers/ContactView'

import { appName } from '../consts'

// eslint-disable-next-line no-unused-vars
const log = debug(appName + ':ContactList.js')

class ContactListBare extends React.Component {
  render() {
    return (
      <article>
        {this.props.contactsData.allContacts && this.props.contactsData.allContacts.edges.map(
          edge => <div key={edge.node.id}>{edge.node.firstName} {edge.node.lastName}</div>
        )}
        <button
          onClick={() => this._loadMore()}
          title="Load More">Load more</button>
      </article>
    )
  }

  _loadMore() {
    if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
      return
    }

    this.props.relay.loadMore(
      10,  // Fetch the next 10 feed items
      error => {
        log('loadMore error', error)
      },
    )
  }
}

export default createPaginationContainer(
  ContactListBare,
  {
    contactsData: graphql`
      fragment ContactList_contactsData on Query
      @argumentDefinitions(
        count: {type: "Int", defaultValue: 10}
        cursor: {type: "String"}
        filterText: {type: "String"}
      ) {
        allContacts (
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
    getConnectionFromProps(props) {
      log('getConnFromProps', props)
      return props.contactsData && props.contactsData.allContacts
    },
    // This is also the default implementation of `getFragmentVariables` if it isn't provided.
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount,
      }
    },
    getVariables(props, { count, cursor }, fragmentVariables) {
      return {
        count,
        cursor,
        filterText: fragmentVariables.filterText,
      }
    },
    // Pagination query to be fetched upon calling `loadMore`.
    // Notice that we re-use our fragment, and the shape of this query matches our fragment spec.
    query: graphql`
      query ContactListQuery (
        $count: Int!
        $cursor: String!
        $filterText: String
      ) {
        ...ContactList_contactsData @arguments(count: $count, cursor: $cursor, filterText: $filterText)
      }
    `
  }
)
