import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'

import styles from '../../App.module.css'
import ButtonPanel from '../../components/ButtonPanel'
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
