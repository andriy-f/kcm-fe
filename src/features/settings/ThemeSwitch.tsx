import React from 'react'

import IconButton from '@mui/material/IconButton'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import Tooltip from '@mui/material/Tooltip'

import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { toggleTheme, selectIsDarkTheme } from './settingsSlice'

export default function ThemeSwitch() {
  const isDarkTheme = useAppSelector(selectIsDarkTheme)
  const dispatch = useAppDispatch()

  return (
    <Tooltip title='Toggle theme'>
      <IconButton aria-label='toggle theme' onClick={() => dispatch(toggleTheme())} >
        {isDarkTheme ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
    </Tooltip>
  )
}
