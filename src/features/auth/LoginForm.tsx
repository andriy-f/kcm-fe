import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'

import Box from '@mui/material/Box'
import Title from '../common/Title'
import { LoginData } from '../../types/LoginData'

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
    <Box
      component="form"
      onSubmit={handleSubmit}>
      <Title>Log into site</Title>
      <TextField label="Login" fullWidth type='text' margin="normal"
        value={login}
        onChange={e => { setLogin(e.target.value) }} />
      <TextField label="Password" fullWidth type='password' margin="normal"
        value={password} onChange={e => { setPassword(e.target.value) }} />
      {errorMessage && <Alert severity='error'>{errorMessage}</Alert>}

      <Button fullWidth type="submit" variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >Log in</Button>
    </Box>
  )
}
