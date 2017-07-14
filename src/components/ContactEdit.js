import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Input } from 'react-toolbox/lib/input'
import { Button } from 'react-toolbox/lib/button'
import { Field, reduxForm } from 'redux-form'

import { kFormContainer, kTextCenter } from '../App.css'
import { requestContact, saveContactRequest } from '../actions'

const TextInput = ({ input: { value, onChange }, label }) => <Input type='text' label={label} value={value} onChange={onChange} />

class ContactEditForm extends Component {
    reload = () => {
        const { load, id } = this.props
        load(id)
    }

    componentDidMount() {
        this.reload()
    }

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props
        return (
            <section className={kFormContainer} >
                <form onSubmit={handleSubmit}>

                    <h3 className={kTextCenter}>Edit Contact</h3>

                    <button type="button" onClick={this.reload}>Reload</button>
                    <button type="button" onClick={reset}>Reset</button>

                    <Field name="firstName" component={TextInput} label="First Name" />
                    <Field name="lastName" component={TextInput} label="Last Name" />
                    <Field name="email" component={TextInput} label="Email" />
                    <Field name="phoneNumber" component={TextInput} label="Phone number" />

                    <div className={kTextCenter}>
                        <Button label="Save" type="submit" disabled={pristine || submitting} flat />
                    </div>
                </form>
            </section>
        )
    }
}

ContactEditForm = reduxForm({ form: 'contactEdit', enableReinitialize: true })(ContactEditForm)

class ContactEditPage extends Component {

    submit = (data) => {
        this.props.save({ _id: data._id, firstName: data.firstName, lastName: data.lastName, email: data.email, phoneNumber: data.phoneNumber })
    }

    render() {
        const { match: { params: { id } }, load, initialValues } = this.props
        return (
            <section className={kFormContainer} >
                <ContactEditForm onSubmit={this.submit} id={id} load={load} initialValues={initialValues} />
            </section>
        )
    }
}

const mapStateToProps = (state) => ({
    initialValues: state.contactEdit.data,
})

const mapDispatchToProps = (dispatch) => ({
    load: id => dispatch(requestContact(id)),
    save: data => dispatch(saveContactRequest(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactEditPage)