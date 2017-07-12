import React from 'react'
import { connect } from 'react-redux'
import { Table, TableHead, TableRow, TableCell } from 'react-toolbox/lib/table'

import { requestContacts } from '../actions'

class ContactList extends React.Component {
    state = { selected: [] }

    componentDidMount() {
        this.props.reloadContacts();
    }

    handleReloadContacts = () => {
        this.props.reloadContacts();
    }

    handleRowSelect = selected => {
        this.setState({ selected });
    }

    render() {
        return (
            <div className="contactList">
                <div>{this.props.errorMessage}</div>
                <button onClick={this.handleReloadContacts}>Refresh</button>
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
                        </TableRow>
                    ))}
                </Table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { contactsPage } = state;
    const error = contactsPage.error;

    return {
        contacts: contactsPage.items,
        errorMessage: error && error.xhr.response && error.xhr.response.message
    }
}

const mapDispatchToProps = dispatch => ({
    reloadContacts: () => dispatch(requestContacts())
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

