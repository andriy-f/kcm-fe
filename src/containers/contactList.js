import React from 'react'
import { connect } from 'react-redux'
import { Table, TableHead, TableRow, TableCell } from 'react-toolbox/lib/table'
import Input from 'react-toolbox/lib/input'

import {
    requestContacts,
    clearContactList as clearContactListAction,
    setContactsFilterText
} from '../actions'
import RTButtonLink from '../components/RTButtonLink'

class ContactList extends React.Component {
    state = { selected: [] }

    componentDidMount() {
        this.props.clearContactList()
        this.props.reloadContacts(this.props.filterText)
    }

    componentWillUnmount() {
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

    render() {
        return (
            <div className="contactList">
                <div>{this.props.errorMessage}</div>
                <Input type="text" label="Filter" value={this.props.filterText} onChange={this.handleFilter} />
                <Table multiSelectable onRowSelect={this.handleRowSelect}>
                    <TableHead>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone Number</TableCell>
                    </TableHead>
                    {this.props.contacts && this.props.contacts.map((item, idx) => (
                        <TableRow key={idx} selected={this.state.selected.indexOf(idx) !== -1}>
                            <TableCell>{item.firstName}</TableCell>
                            <TableCell>{item.lastName}</TableCell>
                            <TableCell>{item.email}</TableCell>
                            <TableCell>{item.phoneNumber}</TableCell>
                            <TableCell><RTButtonLink to={"/contacts/" + item._id}>Edit</RTButtonLink></TableCell>
                        </TableRow>
                    ))}
                </Table>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    const { contactsPage: { items, error, filterText } } = state;

    return {
        contacts: items,
        filterText,
        errorMessage: error && error.xhr && error.xhr.response && error.xhr.response.message
    }
}

const mapDispatchToProps = dispatch => ({
    reloadContacts: (filterText) => dispatch(requestContacts(filterText)),
    clearContactList: () => dispatch(clearContactListAction()),
    setContactsFilterText: (value) => dispatch(setContactsFilterText(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

