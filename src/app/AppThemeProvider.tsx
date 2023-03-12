import React, { PropsWithChildren } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Button from '@mui/material/Button'

import { useAppSelector } from './hooks'
import { selectTheme } from '../features/currentUser/userSlice'

export default function AppThemeProvider({ children }: PropsWithChildren) {
  const themeMode = useAppSelector(selectTheme)
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
        },
      }),
    [themeMode],
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <div>ya</div>
      <div>ya</div>
      <Button >Switch theme</Button>
      {children}
    </ThemeProvider>
  )
}
