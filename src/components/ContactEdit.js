import React from 'react';
import { connect } from 'react-redux'
import { Input } from 'react-toolbox/lib/input'
import { Button } from 'react-toolbox/lib/button'
import { Field, reduxForm } from 'redux-form'

import { kFormContainer, kTextCenter } from '../App.css'

const TextInput = ({ input: { value, onChange }, label }) => <Input type='text' label={label} value={value} onChange={onChange} />

let ContactEditForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <h3 className={kTextCenter}>Edit Contact</h3>

            <Field name="firstName" component={TextInput} label="First Name" />
            <Field name="lastName" component={TextInput} label="Last Name" />
            <Field name="email" component={TextInput} label="Email" />
            <Field name="phoneNumber" component={TextInput} label="Phone number" />

            <div className={kTextCenter}>
                <Button label="Save" type="submit" flat />
            </div>
        </form>
    )
}

ContactEditForm = reduxForm({ form: 'contactEdit' })(ContactEditForm)

const ContactEditPage = () => (
    <section className={kFormContainer} >
        <ContactEditForm />
    </section>
)

export default connect()(ContactEditPage)