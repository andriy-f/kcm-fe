// @flow
import debug from 'debug'
import React from 'react'
import { createRefetchContainer, graphql } from 'react-relay'
import { Input } from 'react-toolbox/lib/input'
import { debounce } from 'throttle-debounce'

import type { ContactListWithFilter_contactsData } from './__generated__/ContactListWithFilter_contactsData.graphql'
import { appName } from '../consts'
import ScrollingPaginationContactsTable from '../containers/ScrollingPaginationContactsTable'
import { contactsFilter } from '../App.css'

// eslint-disable-next-line no-unused-vars
const log = debug(appName + ':ContactListWithFilter.js')

type Props = {
  contactsData: ContactListWithFilter_contactsData,
  relay: any,
}

type State = {
  filterText: string
}

class PlainFilteringContactsTable extends React.Component<Props, State> {
  filterDebounced: any

  constructor(props: Props) {
    super(props)
    this.filterDebounced = debounce(200, this._refetchFun)
  }

  state = {
    filterText: '',
  }

  handleFilterChange = (filterText) => {
    this.setState({ filterText })
  }

  render() {
    const { contactsData } = this.props
    const { filterText } = this.state

    return (
      <article>
        <Input type="text" label="Filter" className={contactsFilter}
          value={filterText}
          onChange={this._handleFilterChange} />
        <ScrollingPaginationContactsTable contactsData={contactsData} relay={null} />
      </article>
    )
  }

  _handleFilterChange = (val) => {
    this.setState({ filterText: val }, this.filterDebounced)
  }

  _refetchFun = () => {
    this.props.relay.refetch(
      { filterText: this.state.filterText },
      null,
      (error) => {
        if (error) {
          log('refetch error', error)
        }
      },
    )
  }
}

export default createRefetchContainer(
  PlainFilteringContactsTable,
  {
    contactsData: graphql`
      fragment ContactListWithFilter_contactsData on Query
        @argumentDefinitions(
          filterText: { type: "String" }
        ) {
          ...ContactList_contactsData @arguments(filterText: $filterText)
        }
`,
  },
  graphql`
      query ContactListWithFilterQuery (
        $filterText: String
      ) {
        ...ContactListWithFilter_contactsData @arguments(filterText: $filterText)
      }
    `
)
