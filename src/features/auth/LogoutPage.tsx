import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { isViewerLoggedIn, requestLogoutThunk } from '../viewer/viewerSlice'

function LogOut() {

  const dispatch = useAppDispatch()
  const beginLogout = () => dispatch(requestLogoutThunk())

  useEffect(() => {
    beginLogout()
  })

  const isLoggedIn = useAppSelector(isViewerLoggedIn)
  if (isLoggedIn) {
    return <span>Logging out...</span>
  } else {
    return <Navigate to='/' replace={true} />
  }
}

export default LogOut
