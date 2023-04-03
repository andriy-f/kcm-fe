import React from 'react'
import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'

import { useAppDispatch, useAppSelector } from '../app/hooks'
import { selectShowDrawer, setShowDrawer } from '../features/settings/settingsSlice'
import Navigation from './Navigation'

const AppDrawer = function () {

  const dispatch = useAppDispatch()
  const drawerOpen = useAppSelector(selectShowDrawer)

  const handleSetShowDrawer =
    (open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return
        }

        dispatch(setShowDrawer(open))
      }

  return (
    <Drawer
      anchor='left'
      open={drawerOpen}
      onClose={handleSetShowDrawer(false)}
    >
      <Box
        sx={{ width: 250 }}
        role='presentation'
        onClick={handleSetShowDrawer(false)}
        onKeyDown={handleSetShowDrawer(false)}
      >
        <Navigation />
      </Box>
    </Drawer>
  )
}

export default AppDrawer
