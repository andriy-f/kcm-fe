import { Navigate, useLocation } from 'react-router-dom'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'

import ButtonPanel from '../../components/ButtonPanel'
import { isViewerLoggedIn, requestLogInThunk, selectError } from '../viewer/viewerSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { type LoginData } from '../../types/LoginData'
import LoginForm from './LoginForm'
import { isRelativeUrl } from '../../utils'

export default function LoginPage() {
  const errorMessage = useAppSelector(selectError)
  const isLoggedIn = useAppSelector(isViewerLoggedIn)
  const dispatch = useAppDispatch()
  const location = useLocation()
  const redirectPath = location.state?.from
    && typeof location.state.from === 'string'
    && isRelativeUrl(location.state.from)
    ? location.state.from as string
    : '/'

  const logIn = (data: LoginData) => {
    dispatch(requestLogInThunk(data))
  }

  const handleLoginAsEditor = () => logIn({ login: 'demo-editor', 'password': 'aSuperSecret' })
  const handleLoginAsViewer = () => logIn({ login: 'demo-viewer', 'password': 'aSuperSecret' })

  if (isLoggedIn) {
    return <Navigate to={redirectPath} />
  } else {
    return (
      <Container maxWidth="sm">
        <LoginForm onSubmit={logIn} errorMessage={errorMessage} />
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
