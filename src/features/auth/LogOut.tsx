import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { isCurrentUserLoggedIn, logOff } from '../../features/currentUser/userSlice'

function LogOut() {

  const dispatch = useAppDispatch()
  const beginLogOff = () => dispatch(logOff())
  const navigate = useNavigate()

  useEffect(() => {
      beginLogOff()
  })

  const isLoggedIn = useAppSelector(isCurrentUserLoggedIn)
  if(isLoggedIn) {
    return <span>Logging out...</span>
  } else {
    navigate('/')
    return null
  }
}

export default LogOut
