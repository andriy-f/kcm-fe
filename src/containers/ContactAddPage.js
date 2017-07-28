import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { Input } from 'react-toolbox/lib/input'
import { Button } from 'react-toolbox/lib/button'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import { RTButtonLink } from '../components/RTButtonLink'
import { kFormContainer, kTextCenter } from '../App.css'
import { addContact, clearAddContactPage } from '../actions'

const TextInput = ({ input: { value, onChange }, label }) => <Input type='text' label={label} value={value} onChange={onChange} />

class ContactAddForm extends Component {
    render() {
        const { handleSubmit, pristine, submitting } = this.props
        return (
            <section className={kFormContainer} >
                <form onSubmit={handleSubmit}>

                    <h3 className={kTextCenter}>Add Contact</h3>

                    <Field name="firstName" component={TextInput} label="First Name" />
                    <Field name="lastName" component={TextInput} label="Last Name" />
                    <Field name="email" component={TextInput} label="Email" />
                    <Field name="phoneNumber" component={TextInput} label="Phone number" />

                    <div className={kTextCenter}>
                        <Button label="Save" type="submit" disabled={pristine || submitting} flat />
                        <RTButtonLink label="Cancel" to="/contacts" />
                    </div>
                </form>
            </section>
        )
    }
}

ContactAddForm = reduxForm({ form: 'contactAdd', enableReinitialize: true })(ContactAddForm)

class ContactAddPage extends Component {

    submit = (data) => {
        this.props.add({ firstName: data.firstName, lastName: data.lastName, email: data.email, phoneNumber: data.phoneNumber })
    }

    componentWillUnmount() {
        this.props.clear()
    }

    render() {
        const { match: { params: { id } }, page: { data, justSaved }, load } = this.props
        return justSaved ? (
            <Redirect to="/contacts" />
        ) : (
                <section className={kFormContainer} >
                    <ContactAddForm onSubmit={this.submit} id={id} load={load} initialValues={data} />
                </section>
            )
    }
}

const mapStateToProps = (state) => ({ page: state.addContactPage })

const mapDispatchToProps = (dispatch) => ({
    add: data => dispatch(addContact(data)),
    clear: () => dispatch(clearAddContactPage())
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactAddPage)