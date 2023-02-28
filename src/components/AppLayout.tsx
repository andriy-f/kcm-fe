import React, { PropsWithChildren } from 'react'
// import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import MuiAppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { Outlet } from 'react-router-dom'

import MainDrawer from './MainDrawer'
import AppProgress from './AppProgress'
import MainNavPinSwitch from './MainNavPinSwitch'

function AppLayout(props: PropsWithChildren) {

  return (
    <Box sx={{ display: 'flex' }}>
      <MuiAppBar>
        <Toolbar>
          <AppProgress />
        </Toolbar>
      </MuiAppBar>
      <MainDrawer />
      <MainNavPinSwitch />
      <Toolbar />
      <Outlet />
    </Box>
  )

}

export default AppLayout
