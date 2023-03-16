import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { isViewerLoggedIn, requestLogoutThunk } from '../viewer/viewerSlice'

function LogOut() {

  const dispatch = useAppDispatch()
  const beginLogout = () => dispatch(requestLogoutThunk())
  const navigate = useNavigate()

  useEffect(() => {
      beginLogout()
  })

  const isLoggedIn = useAppSelector(isViewerLoggedIn)
  if(isLoggedIn) {
    return <span>Logging out...</span>
  } else {
    navigate('/')
    return null
  }
}

export default LogOut
