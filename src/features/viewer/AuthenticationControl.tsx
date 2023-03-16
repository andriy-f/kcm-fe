import React from 'react'
import { Link } from 'react-router-dom'

import { useAppSelector } from '../../app/hooks'
import { loginPath } from '../../components/Router'
import { isUserLoggedIn, selectViewer } from './viewerSlice'

export default function AuthenticationControl() {

  const currentUser = useAppSelector(selectViewer)
  const isLoggedIn = isUserLoggedIn(currentUser)
  return isLoggedIn
    ? (<span>Hello, {currentUser.viewerData?.name}</span>)
    : (<Link to={loginPath}>Login</Link>)
}
