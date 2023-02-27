import React, { useState } from 'react'
import Drawer from '@mui/material/Drawer'

import { isDev } from '../utils'
// import RTButtonNavLink from '../components/RTButtonNavLink'
import { NavLink } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'
import { isCurrentUserLoggedIn, selectCurrentUser } from '../features/currentUser/userSlice'

const MainDrawer = function () {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer =
    (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setDrawerOpen(open)
    }

    const currentUser = useAppSelector(selectCurrentUser)
    const isLoggedIn = useAppSelector(isCurrentUserLoggedIn)
    const currentUserName = currentUser.userData?.name

        return (
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={toggleDrawer}
               >
                <NavLink to='/'>Intro</NavLink>
                <NavLink to='/contacts'>Contacts</NavLink>
                <NavLink to='/settings'>Settings</NavLink>
                {isDev && <NavLink to='/dev' >Dev</NavLink>}
                {isLoggedIn && <NavLink to='/userProfile'>{'Hi, ' + currentUserName}</NavLink>}
                {isLoggedIn && <NavLink to='/logOut'>Log out</NavLink>}
                {!isLoggedIn && <NavLink to="/logIn">Log in</NavLink>}
            </Drawer>
        )
}

export default MainDrawer
