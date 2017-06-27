import React from 'react';
import { connect } from 'react-redux';

import { requestContacts } from '../actions';

class ContactList extends React.Component {

    componentDidMount() {
        this.props.reloadContacts();
    }

    handleReloadContacts = () => {
        this.props.reloadContacts();
    }

    render() {
        return (
            <div className="contactList">
                <div>{this.props.errorMessage}</div>
                <button onClick={this.handleReloadContacts}>Refresh</button>
                <ul>
                    {this.props.contacts && this.props.contacts.map(c =>
                        <li key={c._id}>{c.firstName}</li>
                    )}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { contactsPage } = state;

    return {
        contacts: contactsPage.items,
        errorMessage: contactsPage.error
    }
}

const mapDispatchToProps = dispatch => ({
    reloadContacts: () => dispatch(requestContacts())
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

