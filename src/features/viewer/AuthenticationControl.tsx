import React from 'react'
import { Link } from 'react-router-dom'

import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import LoginIcon from '@mui/icons-material/Login'
import ListItemIcon from '@mui/material/ListItemIcon'
import Logout from '@mui/icons-material/Logout'
import AccountBox from '@mui/icons-material/AccountBox'

import { useAppSelector } from '../../app/hooks'
import { loginPath } from '../../components/Router'
import { isUserLoggedIn, selectViewer } from './viewerSlice'

export default function AuthenticationControl() {

  const viewer = useAppSelector(selectViewer)
  const viewerName = viewer.userData?.name
  const isLoggedIn = isUserLoggedIn(viewer)
  const [anchorElViewer, setAnchorElViewer] = React.useState<null | HTMLElement>(null)

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElViewer(event.currentTarget)
  }
  const handleCloseUserMenu = () => { setAnchorElViewer(null) }

  return isLoggedIn
    ? (<>
      <Tooltip title='Account'>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt={viewerName} src='#' />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id='viewer-menu-appbar'
        anchorEl={anchorElViewer}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElViewer)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem disabled key='Name'>
          <Typography textAlign='center'>Hello, {viewerName}</Typography>
        </MenuItem>
        <Divider />
        <MenuItem key='profile' component={Link} to='/profile' onClick={handleCloseUserMenu}>
          <ListItemIcon>
            <AccountBox fontSize="small" />
          </ListItemIcon>
          <Typography textAlign='center'>Profile</Typography>
        </MenuItem>
        <MenuItem key='logout' component={Link} to='/logout' onClick={handleCloseUserMenu}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <Typography textAlign='center'>Logout</Typography>
        </MenuItem>
      </Menu>
    </>)
    : (
      <Tooltip title='Login'>
        <IconButton
          component={Link}
          to={loginPath}
          aria-label='login'
        >
          <LoginIcon />
        </IconButton>
      </Tooltip>
    )
}
