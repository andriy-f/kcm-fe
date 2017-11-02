import React from 'react'
import { connect } from 'react-redux'
import { Table, TableHead, TableRow, TableCell } from 'react-toolbox/lib/table'
import { IconButton } from 'react-toolbox/lib/button'
import Input from 'react-toolbox/lib/input'
import Dialog from 'react-toolbox/lib/dialog'

import Pager from '../components/Pager'
import { getUserFriendlyErrorMessage } from '../utils'
import { addItemButtonContainer, contactsFilter, contactsPager } from '../App.css'

import {
    requestContacts,
    abortFetchContacts,
    clearContactList as clearContactListAction,
    setContactsProps,
    deleteContact,
    confirmDeleteContact, cancelDeleteContact
} from '../actions'
import { RTButtonLink, RTIconButtonLink } from '../components/RTButtonLink'

class ContactList extends React.Component {
    componentDidMount() {
        this.props.clearContactList()
        this.handleReloadContacts()
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

    handleCurrentPageChange = newPage => {
        this.props.setContactsProps(undefined, newPage)
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
        const { filterText, items, currentPage, totalPages } = this.props
        return (
            <div>
                <div>{this.props.errorMessage}</div>
                <Input type="text" label="Filter" className={contactsFilter} value={filterText} onChange={this.handleFilter} />
                {!!totalPages && <Pager total={totalPages} className={contactsPager} initial={currentPage} onChange={this.handleCurrentPageChange} />}
                <Table selectable={false}>
                    <TableHead>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone Number</TableCell>
                    </TableHead>
                    {items && items.map((item, idx) => (
                        <TableRow key={idx}>
                            <TableCell>{item.firstName || ''}</TableCell>
                            <TableCell>{item.lastName || ''}</TableCell>
                            <TableCell>{item.email || ''}</TableCell>
                            <TableCell>{item.phoneNumber || ''}</TableCell>
                            <TableCell>
                                <RTIconButtonLink icon="edit" to={"/contacts/" + item._id}></RTIconButtonLink>
                                <IconButton icon="delete" data-id={item._id} onClick={this.confirmDeleteSingle} />
                            </TableCell>
                        </TableRow>
                    ))}
                </Table>
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

