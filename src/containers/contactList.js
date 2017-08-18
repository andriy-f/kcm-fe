import React from 'react'
import { connect } from 'react-redux'
import { Table, TableHead, TableRow, TableCell } from 'react-toolbox/lib/table'
import { IconButton } from 'react-toolbox/lib/button'
import Input from 'react-toolbox/lib/input'
import Dialog from 'react-toolbox/lib/dialog'

import { addItemButtonContainer } from '../App.css'

import {
    requestContacts,
    abortFetchContacts,
    clearContactList as clearContactListAction,
    setContactsFilterText,
    deleteContact,
    confirmDeleteContact, cancelDeleteContact
} from '../actions'
import { RTButtonLink, RTIconButtonLink } from '../components/RTButtonLink'

class ContactList extends React.Component {
    state = { selected: [] }

    componentDidMount() {
        this.props.clearContactList()
        this.props.reloadContacts(this.props.filterText)
    }

    componentWillUnmount() {
        this.props.abortFetchContacts()
        this.props.clearContactList()
    }

    handleReloadContacts = () => {
        this.props.reloadContacts(this.props.filterText)
    }

    handleRowSelect = selected => {
        this.setState({ selected })
    }

    handleFilter = value => {
        this.props.setContactsFilterText(value)
        this.props.reloadContacts(value)
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
        const { filterText, items } = this.props
        return (
            <div>
                <div>{this.props.errorMessage}</div>
                <Input type="text" label="Filter" value={filterText} onChange={this.handleFilter} />
                <Table multiSelectable onRowSelect={this.handleRowSelect}>
                    <TableHead>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone Number</TableCell>
                    </TableHead>
                    {items && items.map((item, idx) => (
                        <TableRow key={idx} selected={this.state.selected.indexOf(idx) !== -1}>
                            <TableCell>{item.firstName}</TableCell>
                            <TableCell>{item.lastName}</TableCell>
                            <TableCell>{item.email}</TableCell>
                            <TableCell>{item.phoneNumber}</TableCell>
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
    const { error, filterText, items, contactToDeleteId } = contactsPage

    return {
        filterText,
        items,
        contactToDeleteId,
        errorMessage: error && error.xhr && error.xhr.response && error.xhr.response.message
    }
}

const mapDispatchToProps = dispatch => ({
    reloadContacts: (filterText) => dispatch(requestContacts(filterText)),
    clearContactList: () => dispatch(clearContactListAction()),
    abortFetchContacts: () => dispatch(abortFetchContacts()),
    setContactsFilterText: (value) => dispatch(setContactsFilterText(value)),
    confirmDelete: (id) => dispatch(confirmDeleteContact(id)),
    cancelDelete: () => dispatch(cancelDeleteContact()),
    deleteSingle: (id) => dispatch(deleteContact(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

