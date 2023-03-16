import React from 'react'
import { Link } from 'react-router-dom'

import { useAppSelector } from '../../app/hooks'
import { loginPath } from '../../components/Router'
import { isUserLoggedIn, selectCurrentUser } from './userSlice'

export default function AuthenticationControl() {

  const currentUser = useAppSelector(selectCurrentUser)
  const isLoggedIn = isUserLoggedIn(currentUser)
  return isLoggedIn
    ? (<span>Hello, {currentUser.userData?.name}</span>)
    : (<Link to={loginPath}>Login</Link>)
}
