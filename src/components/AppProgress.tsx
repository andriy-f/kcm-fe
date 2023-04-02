import React from 'react'
import { useNavigation } from 'react-router-dom'
import LinearProgress from '@mui/material/LinearProgress'

const AppProgress = (props: any) => {
  const navigation = useNavigation()
  const { isFetchingAnywhere } = props
  return (isFetchingAnywhere || navigation.state === 'loading'
    ? <LinearProgress />
    : null
  )
}

export default AppProgress
