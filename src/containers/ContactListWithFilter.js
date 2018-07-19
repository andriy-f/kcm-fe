// @flow
import debug from 'debug'
import React from 'react'
import { createRefetchContainer, graphql } from 'react-relay'
import { Input } from 'react-toolbox/lib/input'

import type { ContactListWithFilter_contactsData } from './__generated__/ContactListWithFilter_contactsData.graphql'
import { appName } from '../consts'
import ContactList from '../containers/ContactList'
import { contactsFilter } from '../App.css'

// eslint-disable-next-line no-unused-vars
const log = debug(appName + ':ContactListWithFilter.js')

type Props = {
  contactsData: ContactListWithFilter_contactsData,
  relay: Object,
}

type State = {
  filterText: string
}

class ContactListWithFilterBare extends React.Component<Props, State> {

  state = {
    filterText: '',
  }

  handleFilterChange = (filterText) => {
    this.setState({ filterText })
  }

  render() {
    const { contactsData, relay } = this.props
    const { filterText } = this.state

    return (
      <article>
        <Input type="text" label="Filter" className={contactsFilter}
          value={filterText}
          onChange={this._handleFilterChange} />
        <ContactList contactsData={contactsData} relay={relay} />
      </article>
    )
  }

  _handleFilterChange = (val) => {
    this.setState({ filterText: val })
    this.props.relay.refetch(
      { filterText: val },
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
  ContactListWithFilterBare,
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
