import React, { useState} from 'react'
import { Redirect } from 'react-router-dom'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import Button from '@mui/material/Button'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import Snackbar from '@mui/material/Snackbar'
// import { Form, Field } from 'react-final-form'

import styles from '../App.module.css'
import ButtonPanel from '../../components/ButtonPanel'
import { getUserFriendlyErrorMessage } from '../../utils'
import { isCurrentUserLoggedIn, logIn as logInAction } from '../currentUser/userSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

interface LoginData {
  login: string
  password: string
}

interface LogInFormProps {
  onSubmit: (data: LoginData) => void
}

function LoginForm(props: LogInFormProps ) {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = () => { props.onSubmit({login, password}) }

  return (
      <form onSubmit={handleSubmit}>
        <h3 className={styles.kTextCenter}>Log into site</h3>
        <FormControl>
          <InputLabel htmlFor="kcm-login">Login</InputLabel>
          <Input id="kcm-login" aria-describedby="kcm-login-helper-text"
            value={login}
            onChange={e => setLogin(e.target.value)}
            />
          <FormHelperText id="kcm-login-helper-text">Your private login</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="kcm-password">Password</InputLabel>
          <Input id="kcm-password" aria-describedby="kcm-password-helper-text"
            value={password}
            onChange={e => setPassword(e.target.value)}
            />
          <FormHelperText id="kcm-password-helper-text">Your secret password</FormHelperText>
        </FormControl>
        <ButtonPanel>
          <Button type="submit">Log in</Button>
        </ButtonPanel>
      </form>
       )
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
    const [showMessage, setShowMessage] = useState(false)
    const [errorInfo, setErrorInfo] = useState(null)
    const isLoggedIn = useAppSelector(isCurrentUserLoggedIn)
    const errorMessage = getUserFriendlyErrorMessage(errorInfo)
    const dispatch = useAppDispatch()
    const logIn = (data: LoginData) => dispatch(logInAction(data))
    const handleLoginAsEditor = () => logIn({ login: 'demo-editor', 'password': 'aSuperSecret'})
    const handleLoginAsViewer = () => logIn({ login: 'demo-viewer', 'password': 'aSuperSecret'})

    return isLoggedIn ? (
      <Redirect to="/" />
    ) : (
        <div className={styles.kFormContainer}>
          <LoginForm onSubmit={logIn} />
          <ButtonPanel>
            <Button onClick={handleLoginAsEditor}>
              Editor demo
            </Button>
            <Button onClick={handleLoginAsViewer}>
               Viewer demo
            </Button>
          </ButtonPanel>
          <Snackbar
            open={showMessage && !!errorMessage}
            message={errorMessage}
            autoHideDuration={2000}
            onClick={() => setShowMessage(false)}
            onClose={() => setShowMessage(false)}
          />
        </div >
      )
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
