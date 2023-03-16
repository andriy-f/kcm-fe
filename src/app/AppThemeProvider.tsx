import React, { PropsWithChildren } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import { useAppSelector } from './hooks'
import { selectTheme } from '../features/viewer/viewerSlice'

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
      {children}
    </ThemeProvider>
  )
}
