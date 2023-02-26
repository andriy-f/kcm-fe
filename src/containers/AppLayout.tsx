import React, { PropsWithChildren } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
// import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import MuiAppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'

import MainNav from './MainDrawer'
// import styles from '../App.module.css'
import AppProgress from '../containers/AppProgress'
// import { sideNavActiveSetting } from '../consts'
import MainNavPinSwitch from '../containers/MainNavPinSwitch'
const mdTheme = createTheme()

function AppLayout(props: PropsWithChildren) {
  // const toggleSideNav = () => { // TODO
  // }

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <MuiAppBar>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <Drawer>
              <MainNav />
              <MainNavPinSwitch />
            </Drawer>
            <AppProgress />
            {props.children}
          </Toolbar>
        </MuiAppBar>
      </Box>
    </ThemeProvider>
  )

}

export default AppLayout
