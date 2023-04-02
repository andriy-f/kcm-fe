import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import MuiAppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Brightness4Icon from '@mui/icons-material/Brightness4'

import MainDrawer from './MainDrawer'
import AppProgress from './AppProgress'
import { useAppDispatch } from '../app/hooks'
import { toggleTheme } from '../features/viewer/viewerSlice'
import AuthenticationControl from '../features/viewer/AuthenticationControl'

function AppLayout() {

  const dispatch = useAppDispatch()
  // todo move drawerOpen to redux
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


  return (
    <Box sx={{ display: 'block' }}>
      <MuiAppBar component="nav">
        <Toolbar>
          <IconButton aria-label="menu" onClick={toggleDrawer(true)}>
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
      <MainDrawer open={drawerOpen} toggle={toggleDrawer} />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  )

}

export default AppLayout
