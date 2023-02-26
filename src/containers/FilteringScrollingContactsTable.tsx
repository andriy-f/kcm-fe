import debug from 'debug'
import React, { ChangeEvent } from 'react'
import { createRefetchContainer, graphql, RelayRefetchProp } from 'react-relay'
import TextField from '@mui/material/TextField'
import { debounce } from 'throttle-debounce'

import type { FilteringScrollingContactsTable_contactsData$key } from './__generated__/FilteringScrollingContactsTable_contactsData.graphql'
import { appName } from '../consts'
import ScrollingPaginationContactsTable from '../containers/ScrollingPaginationContactsTable'
import styles from '../App.module.css'

// eslint-disable-next-line no-unused-vars
const log = debug(appName + ':FilteringScrollingContactsTable.js')

type Props = {
  contactsData: FilteringScrollingContactsTable_contactsData$key,
  relay: RelayRefetchProp,
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

  handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ filterText: event.target.value })
  }

  render() {
    const { contactsData, readonly } = this.props
    const { filterText } = this.state

    return (
      <article>
        <TextField type="text" label="Filter" className={styles.contactsFilter}
          value={filterText}
          onChange={this.handleFilterChange} />
        <ScrollingPaginationContactsTable contactsData={contactsData} readonly={readonly} />
      </article>
    )
  }

  _handleFilterChange = (val: string) => {
    this.setState({ filterText: val }, this.filterDebounced)
  }

  _refetchFun = () => {
    this.props.relay.refetch(
      { filterText: this.state.filterText },
      null,
      (error: any) => {
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
