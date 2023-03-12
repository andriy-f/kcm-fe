import React from 'react'
import { Outlet } from 'react-router-dom'
import MuiAppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'

import MainDrawer from './MainDrawer'
import AppProgress from './AppProgress'
import MainNavPinSwitch from './MainNavPinSwitch'

function AppLayout() {

  return (
    <Box sx={{ display: 'block' }}>
      <MuiAppBar component="nav">
        <Toolbar>
        <IconButton aria-label="menu">
          <MenuIcon />
        </IconButton>
        <AppProgress />
        <MainNavPinSwitch />
        </Toolbar>
      </MuiAppBar>
      <MainDrawer />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  )

}

export default AppLayout
