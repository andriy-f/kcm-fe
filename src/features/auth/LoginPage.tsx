import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'

import ButtonPanel from '../../components/ButtonPanel'
import { isViewerLoggedIn, requestLogInThunk, selectError } from '../viewer/viewerSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { LoginData } from '../../types/LoginData'
import LoginForm from './LoginForm'

export default function LoginPage() {
  const errorMessage = useAppSelector(selectError)
  const isLoggedIn = useAppSelector(isViewerLoggedIn)
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
