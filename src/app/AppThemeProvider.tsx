import React, { PropsWithChildren } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Button from '@mui/material/Button'

const ColorModeContext = React.createContext({ toggleColorMode: () => { } })
const theme = createTheme()

export default function AppThemeProvider({ children }: PropsWithChildren) {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light')
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    [],
  )
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Button onClick={colorMode.toggleColorMode}>Switch theme</Button>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
