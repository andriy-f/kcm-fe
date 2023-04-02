import React, { useState } from 'react'
import Toolbar from '@mui/material/Toolbar'
import Drawer from '@mui/material/Drawer'

import Box from '@mui/material/Box'
import Navigation from './Navigation'

const MainDrawer = function (props: { open: boolean, toggle: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void }) {

  return (
    <Box component="nav">
      <Drawer
        anchor='left'
        open={props.open}
        onClose={props.toggle(false)}
      >
        <Toolbar>
          <Navigation />
        </Toolbar>
      </Drawer>
    </Box>
  )
}

export default MainDrawer
