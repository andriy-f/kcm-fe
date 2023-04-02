import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import MuiAppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import LinearProgress from '@mui/material/LinearProgress'

import MainDrawer from './MainDrawer'
import AppProgress from './AppProgress'
import { useAppDispatch } from '../app/hooks'
import { toggleTheme } from '../features/viewer/viewerSlice'
import AuthenticationControl from '../features/viewer/AuthenticationControl'

function AppLayout() {

  const dispatch = useAppDispatch()
  const navigation = useNavigation()
  return (
    <Box sx={{ display: 'block' }}>
      <MuiAppBar component="nav">
        <Toolbar>
          <IconButton aria-label="menu">
            <MenuIcon />
          </IconButton>

          <Box sx={{ flexGrow: 1 }}>
          </Box>

          <IconButton aria-label="menu" onClick={() => dispatch(toggleTheme())} >
            <Brightness4Icon />
          </IconButton>

          <AuthenticationControl />

        </Toolbar>
        {navigation.state === 'loading' && <LinearProgress />}
        <AppProgress />
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
