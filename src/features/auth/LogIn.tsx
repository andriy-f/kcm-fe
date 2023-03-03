import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
// import Snackbar from '@mui/material/Snackbar'
import Box from '@mui/material/Box'
// import { Form, Field } from 'react-final-form'

import styles from '../../App.module.css'
import ButtonPanel from '../../components/ButtonPanel'
import { isCurrentUserLoggedIn, requestLogInThunk, selectError } from '../currentUser/userSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { LoginData } from '../../types/LoginData'

interface LogInFormProps {
  onSubmit: (data: LoginData) => void
}

function LoginForm(props: LogInFormProps) {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit: React.FormEventHandler<HTMLElement> = (e) => {
    e.preventDefault()
    props.onSubmit({ login, password })
  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <h3 className={styles.kTextCenter}>Log into site</h3>
      <TextField label="Login" value={login} onChange={e => { setLogin(e.target.value) }} />
      <TextField label="Password" value={password} onChange={e => { setPassword(e.target.value) }} />
      <ButtonPanel>
        <Button type="submit">Log in</Button>
      </ButtonPanel>
    </Box>
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
  // const [showMessage, setShowMessage] = useState(true)
  const errorMessage = useAppSelector(selectError)
  const isLoggedIn = useAppSelector(isCurrentUserLoggedIn)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const logIn = (data: LoginData) => dispatch(requestLogInThunk(data))
  const handleLoginAsEditor = () => logIn({ login: 'demo-editor', 'password': 'aSuperSecret' })
  const handleLoginAsViewer = () => logIn({ login: 'demo-viewer', 'password': 'aSuperSecret' })

  if (isLoggedIn) {
    navigate('/')
    return null
  } else {
    return (
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
        <Box>
          {errorMessage}
        </Box>

        {/* <Snackbar
          open={showMessage && !!errorMessage}
          message={errorMessage}
          autoHideDuration={2000}
          onClick={() => setShowMessage(false)}
          onClose={() => setShowMessage(false)}
        /> */}
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
