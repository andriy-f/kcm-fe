import React from 'react'

import { useAppSelector } from '../../app/hooks'
import { isUserLoggedIn, selectCurrentUser } from '../currentUser/userSlice'
import NotAuthorized from './NotAuthorized'
import NotLoggedIn from './NotLoggedIn'

type Props = {
  requiredPermissions: string[]
}

export const ProtectedRoute = (props: React.PropsWithChildren<Props>) => {
  const { children, requiredPermissions } = props
    const currentUser = useAppSelector(selectCurrentUser)
    const isLoggedIn = isUserLoggedIn(currentUser)
      if (isLoggedIn) {
        const isAuthorized = requiredPermissions.every(p => currentUser.userData?.permissions.includes(p))
        return isAuthorized ? children : <NotAuthorized />
      } else {
        return <NotLoggedIn />
      }
    }
