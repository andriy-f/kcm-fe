import gql from 'graphql-tag'
import React from 'react'
import { Query } from 'react-apollo'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Table, TableHead, TableRow, TableCell } from 'react-toolbox/lib/table'
import { IconButton } from 'react-toolbox/lib/button'
// import { Input } from 'react-toolbox/lib/input'
import Dialog from 'react-toolbox/lib/dialog'
// import { Grid, Row, Col } from 'react-flexbox-grid'
import { Link } from 'react-router-dom'

// import Pager, { ItemsPerPage } from '../components/Pager'
import { getUserFriendlyErrorMessage } from '../utils'
import { addItemButtonContainer } from '../App.css'

import {
  requestContacts,
  abortFetchContacts,
  clearContactList as clearContactListAction,
  setContactsProps,
  deleteContact,
  confirmDeleteContact, cancelDeleteContact
} from '../actions'
import { RTButtonLink, RTIconButtonLink } from '../components/RTButtonLink'

const GQLContactList = ({ confirmDeleteSingle }) => (
  <Query query={gql`
      query FindAdv($limit: Int, $skip: Int, $filter: ContactFilterInput) {
        contacts(limit: $limit, skip: $skip, filter: $filter) {
          _id
          firstName
          lastName
          email
          phoneNumber
        }
      }
  `}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return (
        <Table selectable={false}>
          <TableHead>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone Number</TableCell>
          </TableHead>
          {data.contacts && data.contacts.map(({ _id, firstName, lastName, email, phoneNumber }) => {
            const itemEditPath = "/contacts/" + _id
            const ItemLink = ({ children }) => <Link to={itemEditPath}>{children}</Link>
            return (
              <TableRow key={_id}>
                <TableCell><ItemLink>{firstName || ''}</ItemLink></TableCell>
                <TableCell>{lastName || ''}</TableCell>
                <TableCell>{email || ''}</TableCell>
                <TableCell>{phoneNumber || ''}</TableCell>
                <TableCell>
                  <RTIconButtonLink icon="edit" to={itemEditPath}></RTIconButtonLink>
                  <IconButton icon="delete" data-id={_id} onClick={confirmDeleteSingle} />
                </TableCell>
              </TableRow>
            )
          })}
        </Table>
      )
    }}
  </Query>
)

class ContactList extends React.Component {
  componentDidMount() {
    this.props.clearContactList()
  }

  componentWillUnmount() {
    this.props.abortFetchContacts()
    this.props.clearContactList()
  }

  handleReloadContacts = (override = {}) => {
    const { filterText, itemsPerPage, currentPage } = { ...this.props, ...override }
    const skip = itemsPerPage * (currentPage - 1)
    const take = this.props.itemsPerPage
    this.props.reloadContacts(filterText, skip, take)
  }

  handleFilter = value => {
    this.props.setContactsProps(value)
  }

  handlePageChange = (newPage) => {
    this.props.setContactsProps(undefined, newPage)
  }

  handleItemsPerPageChange = (itemsPerPage) => {
    this.props.setContactsProps(undefined, undefined, itemsPerPage)
  }

  deleteSingle = () => {
    this.props.deleteSingle(this.props.contactToDeleteId)
  }

  confirmDeleteSingle = (event) => {
    this.props.confirmDelete(event.target.dataset.id)
  }

  cancelDeletion = () => {
    this.props.cancelDelete()
  }

  confirmDeleteActions = [
    { label: "Cancel", onClick: this.cancelDeletion },
    { label: "Delete", onClick: this.deleteSingle, primary: true }
  ]

  render() {
    // const { filterText, currentPage, totalPages, itemsPerPage } = this.props
    return (
      <div>
        <div>{this.props.errorMessage}</div>
        {/* <Grid fluid>
          <Row>
            <Col xs={12} sm={12} md={5} lg={6}>
              <Input type="text" label="Filter" className={contactsFilter} value={filterText}
                onChange={this.handleFilter} />
            </Col>
            <Col xs={12} sm={7} md={5} lg={4}>
              <Pager className={contactsPager}
                total={totalPages} current={currentPage} itemsPerPage={itemsPerPage}
                onChange={this.handlePageChange} />
            </Col>
            <Col xs={12} sm={5} md={2} lg={2}>
              <ItemsPerPage value={itemsPerPage} onChange={this.handleItemsPerPageChange} />
            </Col>
          </Row>
        </Grid> */}
        <GQLContactList />

        <div className={addItemButtonContainer}>
          <RTButtonLink icon='add' floating accent to="/contacts/new" />
        </div>
        <Dialog
          actions={this.confirmDeleteActions}
          active={!!this.props.contactToDeleteId}
          onEscKeyDown={this.cancelDeletion}
          onOverlayClick={this.cancelDeletion}
          title='Confirm delete'
        >
          <p>Do you realy want to delete this contact?</p>
        </Dialog>
      </div >
    )
  }
}

ContactList.propTypes = {
  abortFetchContacts: PropTypes.func.isRequired,
  clearContactList: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  const { contactsPage } = state

  return {
    ...contactsPage,
    errorMessage: getUserFriendlyErrorMessage(contactsPage.error)
  }
}

const mapDispatchToProps = dispatch => ({
  reloadContacts: (filterText, skip, take) => dispatch(requestContacts(filterText, skip, take)),
  clearContactList: () => dispatch(clearContactListAction()),
  abortFetchContacts: () => dispatch(abortFetchContacts()),
  setContactsProps: (filterText, currentPage, totalPages) =>
    dispatch(setContactsProps(filterText, currentPage, totalPages)),
  confirmDelete: (id) => dispatch(confirmDeleteContact(id)),
  cancelDelete: () => dispatch(cancelDeleteContact()),
  deleteSingle: (id) => dispatch(deleteContact(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
