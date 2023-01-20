import React, { useState } from 'react'
import Drawer from '@mui/material/Drawer'

import { isUserLoggedIn, isDev } from '../utils'
import RTButtonNavLink from '../components/RTButtonNavLink'
import { useAppSelector } from '../app/hooks'

const MainDrawer = function () {
  const [drawerOpen, setDrawerOpen] = React.useState(false)

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

    const currentUser = useAppSelector()

    const currentUser = this.props.currentUser
    const isLoggedIn = isUserLoggedIn(currentUser)

        return (
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={toggleDrawer}
               >
                <RTButtonNavLink to='/' label='Intro' />
                <RTButtonNavLink to='/contacts' label='Contacts' />
                <RTButtonNavLink to='/settings' label='Settings' />
                {isDev && <RTButtonNavLink to='/dev' >Dev</RTButtonNavLink>}
                {isLoggedIn && <RTButtonNavLink to='/userProfile' label={'Hi, ' + currentUser.name} />}
                {isLoggedIn && <RTButtonNavLink to='/logOut' label='Log out' />}
                {!isLoggedIn && <RTButtonNavLink to="/logIn" label='Log in' />}
            </Drawer>
        )
}

export default MainDrawer
