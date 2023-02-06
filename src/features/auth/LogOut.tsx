import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../app/hooks'
import { isCurrentUserLoggedIn, logOff } from '../features/currentUser/userSlice'

function LogOut() {

  const dispatch = useAppDispatch()
  const beginLogOff = () => dispatch(logOff())

  useEffect(() => {
      beginLogOff()
  })

  const isLoggedIn = useAppSelector(isCurrentUserLoggedIn)

  return isLoggedIn ? (
      <span>Logging out...</span>
  ) : (
          <Redirect to="/" />
      )
}
export default LogOut
