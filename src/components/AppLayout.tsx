import React from 'react'
import { Outlet } from 'react-router-dom'
import MuiAppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Brightness4Icon from '@mui/icons-material/Brightness4'

import AppProgress from './AppProgress'
import { useAppDispatch } from '../app/hooks'
import { toggleTheme } from '../features/settings/settingsSlice'
import AuthenticationControl from '../features/viewer/AuthenticationControl'
import { setShowDrawer } from '../features/settings/settingsSlice'
import AppDrawer from './AppDrawer'

function AppLayout() {

  const dispatch = useAppDispatch()

  const openDrawer =
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      dispatch(setShowDrawer(true))
    }


  return (
    <Box sx={{ display: 'block' }}>
      <MuiAppBar component="nav">
        <Toolbar>
          <IconButton aria-label="menu" onClick={openDrawer}>
            <MenuIcon />
          </IconButton>

          <Box sx={{ flexGrow: 1 }}>
          </Box>

          <IconButton aria-label="menu" onClick={() => dispatch(toggleTheme())} >
            <Brightness4Icon />
          </IconButton>

          <AuthenticationControl />

        </Toolbar>
        <AppProgress />
      </MuiAppBar>

      <AppDrawer />

      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  )

}

export default AppLayout
