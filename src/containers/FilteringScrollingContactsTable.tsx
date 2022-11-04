// @flow
import debug from 'debug'
import React from 'react'
import { createRefetchContainer, graphql } from 'react-relay'
import Input from '@mui/material/Input'
import { debounce } from 'throttle-debounce'

import type { FilteringScrollingContactsTable_contactsData } from './__generated__/FilteringScrollingContactsTable_contactsData.graphql'
import { appName } from '../consts'
import ScrollingPaginationContactsTable from '../containers/ScrollingPaginationContactsTable'
import styles from '../App.module.css'

// eslint-disable-next-line no-unused-vars
const log = debug(appName + ':FilteringScrollingContactsTable.js')

type Props = {
  contactsData: FilteringScrollingContactsTable_contactsData,
  relay: any,
  readonly?: boolean,
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
    const { contactsData, readonly } = this.props
    const { filterText } = this.state

    return (
      <article>
        <Input type="text" label="Filter" className={styles.contactsFilter}
          value={filterText}
          onChange={this._handleFilterChange} />
        <ScrollingPaginationContactsTable contactsData={contactsData} relay={null} readonly={readonly} />
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
      fragment FilteringScrollingContactsTable_contactsData on Query
        @argumentDefinitions(
          filterText: { type: "String" }
        ) {
          ...ScrollingPaginationContactsTable_contactsData @arguments(filterText: $filterText)
        }
`,
  },
  graphql`
      query FilteringScrollingContactsTableQuery (
        $filterText: String
      ) {
        ...FilteringScrollingContactsTable_contactsData @arguments(filterText: $filterText)
      }
    `
)
