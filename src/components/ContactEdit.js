import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Input } from 'react-toolbox/lib/input'
import { Button } from 'react-toolbox/lib/button'
import { Field, reduxForm } from 'redux-form'

import { kFormContainer, kTextCenter } from '../App.css'
import { requestContact } from '../actions'

const TextInput = ({ input: { value, onChange }, label }) => <Input type='text' label={label} value={value} onChange={onChange} />

class ContactEditForm extends Component {
    reload = () => {
        const { match: { params: { id } }, load } = this.props
        // const { load, id } = this.props
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

ContactEditForm = reduxForm({ form: 'contactEdit' })(ContactEditForm)

// const handleSubmit = (event) => {
//     event.preventDefault()
//     alert('Form submited!')
// }

// class ContactEditPage extends Component {

//     // componentDidMount() {
//     //     const { match: { params: { id } }, load } = this.props
//     //     id && load(id)
//     // }

//     render() {
//         // const { match: { params: { id } }, load, initialValues } = this.props
//         const { match, load, initialValues } = this.props
//         return (
//             <section className={kFormContainer} >
//                 {/* <ContactEditForm handleSubmit={handleSubmit} id={id} load={load} initialValues={initialValues} /> */}
//                 <ContactEditForm handleSubmit={handleSubmit} load={load} initialValues={initialValues} match={match} />
//             </section>
//         )
//     }
// }

const mapStateToProps = (state) => ({
    initialValues: state.contactEdit.data,
    enableReinitialize: true,
})

const mapDispatchToProps = (dispatch) => ({
    load: id => dispatch(requestContact(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactEditForm)