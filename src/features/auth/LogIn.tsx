import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'

import styles from '../../App.module.css'
import ButtonPanel from '../../components/ButtonPanel'
import { isCurrentUserLoggedIn, requestLogInThunk, selectError } from '../currentUser/userSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { LoginData } from '../../types/LoginData'

interface LogInFormProps {
  errorMessage?: string | null
  onSubmit: (data: LoginData) => void
}

function LoginForm(props: LogInFormProps) {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit: React.FormEventHandler<HTMLElement> = (e) => {
    e.preventDefault()
    props.onSubmit({ login, password })
  }
  const { errorMessage } = props

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <h3 className={styles.kTextCenter}>Log into site</h3>
      <Stack spacing={2}>
        <TextField label="Login" value={login} onChange={e => { setLogin(e.target.value) }} />
        <TextField label="Password" value={password} onChange={e => { setPassword(e.target.value) }} />
        {errorMessage && <Alert severity='error'>{errorMessage}</Alert>}
      </Stack>
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
      <Container maxWidth="sm">
        <LoginForm onSubmit={logIn} errorMessage={errorMessage}/>
        <ButtonPanel>
          <Button onClick={handleLoginAsEditor}>
            Editor demo
          </Button>
          <Button onClick={handleLoginAsViewer}>
            Viewer demo
          </Button>
        </ButtonPanel>
      </Container>
    )
  }
}

export default LogIn
