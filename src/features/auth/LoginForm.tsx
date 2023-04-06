import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'

import Title from '../common/Title'
import ButtonPanel from '../../components/ButtonPanel'
import { LoginData } from '../../types/LoginData'
import Container from '@mui/material/Container'

interface Props {
  errorMessage?: string | null
  onSubmit: (data: LoginData) => void
}

export default function LoginForm(props: Props) {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit: React.FormEventHandler<HTMLElement> = (e) => {
    e.preventDefault()
    props.onSubmit({ login, password })
  }
  const { errorMessage } = props

  return (
    <Container
      maxWidth="xs"
      component="form"
      onSubmit={handleSubmit}
    >
      <Title>Log into site</Title>
      <TextField label="Login" fullWidth type='text' margin="normal"
        value={login}
        onChange={e => { setLogin(e.target.value) }} />
      <TextField label="Password" fullWidth type='password' margin="normal"
        value={password} onChange={e => { setPassword(e.target.value) }} />
      {errorMessage && <Alert severity='error'>{errorMessage}</Alert>}
      <ButtonPanel>
        <Button type="submit">Log in</Button>
      </ButtonPanel>
    </Container>
  )
}
