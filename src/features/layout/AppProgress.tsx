import { useNavigation } from 'react-router-dom'
import LinearProgress from '@mui/material/LinearProgress'

const AppProgress = () => {
  const navigation = useNavigation()
  const shouldShowProgress = navigation.state === 'loading'

  return shouldShowProgress
    ? <LinearProgress />
    : null
}

export default AppProgress
