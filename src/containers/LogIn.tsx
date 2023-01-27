import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import Button from '@mui/material/Button'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import Snackbar from '@mui/material/Snackbar'
// import { Form, Field } from 'react-final-form'

import styles from '../App.module.css'
import ButtonPanel from '../components/ButtonPanel'
import { getUserFriendlyErrorMessage } from '../utils'
import { isCurrentUserLoggedIn, logIn } from '../features/currentUser/userSlice'
import { useAppDispatch, useAppSelector } from '../app/hooks'

function LoginForm(props: React.FormHTMLAttributes<HTMLFormElement>) {
  return (
      <form {...props}>
        <h3 className={styles.kTextCenter}>Log into site</h3>
        <FormControl>
          <InputLabel htmlFor="kcm-login">Login</InputLabel>
          <Input id="kcm-login" aria-describedby="kcm-login-helper-text" />
          <FormHelperText id="kcm-login-helper-text">Your private login</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="kcm-password">Password</InputLabel>
          <Input id="kcm-password" aria-describedby="kcm-password-helper-text" />
          <FormHelperText id="kcm-password-helper-text">Your secret password</FormHelperText>
        </FormControl>
        <ButtonPanel>
          <Button type="submit">Log in</Button>
        </ButtonPanel>
      </form>
       )
}

interface LoginProps {
  login: string
  password: string
}

// class LogInOld extends React.Component {
//   constructor(props: any) {
//     super(props)
//     this.state = { showMessage: true }
//   }

//   handleSubmit = (values: LoginProps) => {
//     this.props.initAuthenticate(values.login, values.password)
//   }

//   handleSnackbarClick = () => {
//     this.setState({ showMessage: false })
//   }

//   handleSnackbarTimeout = () => {
//     this.setState({ showMessage: false })
//   }

//   componentWillReceiveProps(nextProps) {
//     this.setState({ showMessage: true })
//   }

//   componentDidMount() {
//     this.props.cleanup()
//   }

//   componentWillUnmount() {
//     this.props.cleanup()
//   }

//   handleLogInEditor = () => {
//     this.props.initAuthenticate('demo-editor', 'aSuperSecret')
//   }

//   handleLogInViewer = () => {
//     this.props.initAuthenticate('demo-viewer', 'aSuperSecret')
//   }

//   render() {
function LogIn() {
    const isLoggedIn = useAppSelector(isCurrentUserLoggedIn())
    const errorMessage = getUserFriendlyErrorMessage(this.props.logIn.error)
    const dispatch = useAppDispatch()
    const handleSubmit = () => dispatch(logIn({}))

    return isLoggedIn ? (
      <Redirect to="/" />
    ) : (
        <div className={styles.kFormContainer}>
          <LoginForm onSubmit={this.handleSubmit} />
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

// const mapStateToProps = (state) => {
//   const { currentUser, logIn } = state

//   return {
//     currentUser,
//     logIn,
//   }
// }

// const mapDispatchToProps = (dispatch) => ({
//   initAuthenticate: (login, password) => dispatch(logIn(login, password)),
//   cleanup: () => dispatch(logInCleanup())
// })

// export default connect(mapStateToProps, mapDispatchToProps)(LogIn)

export default LogIn
