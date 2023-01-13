import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch'

import { useAppSelector, useAppDispatch } from '../app/hooks';
import { selectSideNavPinned, toggleSideNavPinned } from '../features/settings/settingsSlice';

function MainNavPinSwitch () {
  const sideNavPinned = useAppSelector(selectSideNavPinned)
  const dispatch = useAppDispatch
        return (
          <FormGroup>
            <FormControlLabel control={
              <Switch
                checked={sideNavPinned}
                onChange={() => dispatch(toggleSideNavPinned)} />
            } label="Pin" />
          </FormGroup>
        )
      }

export default MainNavPinSwitch
