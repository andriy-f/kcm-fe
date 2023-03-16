import React, { useState } from 'react'
import Toolbar from '@mui/material/Toolbar'
import Drawer from '@mui/material/Drawer'

import { isDev } from '../utils'
// import RTButtonNavLink from '../components/RTButtonNavLink'
import { NavLink } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'
import { isUserLoggedIn, selectViewer } from '../features/viewer/viewerSlice'
import Box from '@mui/material/Box'

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

  const viewer = useAppSelector(selectViewer)
  const isLoggedIn = isUserLoggedIn(viewer)
  const viewerName = viewer.userData?.name

  return (
    <Box component="nav">
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
      >
        <Toolbar>
          <NavLink to='/'>Intro</NavLink>
          <NavLink to='/contacts'>Contacts</NavLink>
          <NavLink to='/settings'>Settings</NavLink>
          {isDev && <NavLink to='/dev' >Dev</NavLink>}
          {isLoggedIn && <NavLink to='/userProfile'>{'Hi, ' + viewerName}</NavLink>}
          {isLoggedIn && <NavLink to='/logOut'>Log out</NavLink>}
          {!isLoggedIn && <NavLink to="/logIn">Log in</NavLink>}
        </Toolbar>
      </Drawer>
    </Box>
  )
}

export default MainDrawer
