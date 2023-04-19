import React from 'react'
import { Navigate } from 'react-router-dom'

import { useAppSelector } from '../../app/hooks'
import { isUserLoggedIn, selectViewer } from '../viewer/viewerSlice'
import NotAuthorized from './NotAuthorized'
import { loginPath } from '../../components/paths'

type Props = {
  permissions?: string[]
}

/**
 * Require user being logged in.
 * If permissions are specified, require user having all of them.
 * If no permissions are specified, require user just being logged in.
 */
const RequireAuth = ({ children, permissions }: React.PropsWithChildren<Props>) => {
  const viewer = useAppSelector(selectViewer)
  const isLoggedIn = isUserLoggedIn(viewer)

  if (isLoggedIn) {
    const isAuthorized = (permissions && permissions.length > 0)
      ? permissions.every(p => viewer.userData?.permissions?.includes(p))
      : true

    return isAuthorized ? <>{children}</> : <NotAuthorized />
  } else {
    // TODO redirect to login page with redirect url
    return <Navigate to={'/' + loginPath} />
  }
}

export default RequireAuth
