import React from 'react'
import { createPaginationContainer, graphql } from 'react-relay'

class ContactListBare extends React.Component {
  render() {
    console.log('render cl', this.props)
    return (
      <article>
        {this.props.query && this.props.query.allContacts.edges.map(
          edge => <div>{edge.node} {edge.node.id}></div>
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
        console.log(error)
      },
    )
  }
}

export default createPaginationContainer(
  ContactListBare,
  {
    allContacts: graphql`
      fragment ContactList_allContacts on Query
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
      console.log('getConnFromProps', props)
      return props.user && props.user.feed
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
        ...ContactList_allContacts @arguments(count: $count, cursor: $cursor, filterText: $filterText)
      }
    `
  }
)
