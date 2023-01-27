import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../app/hooks'
import { isUserLoggedIn, logOff } from '../features/currentUser/userSlice'

function LogOut() {

  const dispatch = useAppDispatch()
  const beginLogOff = () => dispatch(logOff())

  useEffect(() => {
      beginLogOff()
  })

  const isLoggedIn = useAppSelector(isUserLoggedIn)

  return isLoggedIn ? (
      <span>Logging out...</span>
  ) : (
          <Redirect to="/" />
      )
}
export default LogOut
