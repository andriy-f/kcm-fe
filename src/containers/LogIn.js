import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Button } from 'react-toolbox/lib/button'
import { Input } from 'react-toolbox/lib/input'
import { Snackbar } from 'react-toolbox/lib/snackbar'
import { Field, reduxForm } from 'redux-form'

import { kFormContainer, kTextCenter } from '../App.css'
import { logIn, logInCleanup } from '../actions'
import ButtonPanel from '../components/ButtonPanel'
import { isUserLoggedIn, getUserFriendlyErrorMessage } from '../utils'

const LoginInput = ({ input: { value, onChange } }) => <Input required type='text' label='Login' value={value} onChange={onChange} />
const PasswordInput = ({ input: { value, onChange } }) => <Input required type='password' label='Password' value={value} onChange={onChange} />

const LoginForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <h3 className={kTextCenter}>Log into site</h3>
      <Field name='login' component={LoginInput} />
      <Field name='password' component={PasswordInput} />
      <ButtonPanel>
        <Button label="Log in" type="submit" flat />
      </ButtonPanel>
    </form>
  )
}

const LoginFormReduxed = reduxForm({
  form: 'logIn'
})(LoginForm)

class LogIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showMessage: true }
  }

  handleSubmit = (values) => {
    this.props.initAuthenticate(values.login, values.password)
  }

  handleSnackbarClick = () => {
    this.setState({ showMessage: false })
  }

  handleSnackbarTimeout = () => {
    this.setState({ showMessage: false })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ showMessage: true })
  }

  componentDidMount() {
    this.props.cleanup()
  }

  componentWillUnmount() {
    this.props.cleanup()
  }

  handleLogInEditor = () => {
    this.props.initAuthenticate('demo-editor', 'aSuperSecret')
  }

  handleLogInViewer = () => {
    this.props.initAuthenticate('demo-viewer', 'aSuperSecret')
  }

  render() {
    const currentUser = this.props.currentUser
    const isLoggedIn = isUserLoggedIn(currentUser)
    const errorMessage = getUserFriendlyErrorMessage(this.props.logIn.error)

    return isLoggedIn ? (
      <Redirect to="/" />
    ) : (
        <div className={kFormContainer}>
          <LoginFormReduxed onSubmit={this.handleSubmit} />
          <ButtonPanel>
            <Button label="Editor demo" onClick={this.handleLogInEditor} raised accent />
            <Button label="Viewer demo" onClick={this.handleLogInViewer} raised accent />
          </ButtonPanel>
          <Snackbar
            action='Dismiss'
            active={this.state.showMessage && !!errorMessage}
            label={errorMessage}
            timeout={2000}
            onClick={this.handleSnackbarClick}
            onTimeout={this.handleSnackbarTimeout}
            type='cancel'
          />
        </div >
      )
  }
}

const mapStateToProps = (state) => {
  const { currentUser, logIn } = state

  return {
    currentUser,
    logIn,
  }
}

const mapDispatchToProps = (dispatch) => ({
  initAuthenticate: (login, password) => dispatch(logIn(login, password)),
  cleanup: () => dispatch(logInCleanup())
})

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)
