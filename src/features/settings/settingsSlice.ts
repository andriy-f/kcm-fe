import { createAction, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../../app/store'
import {
  TOGGLE_SETTING, SET_SETTING,
} from '../../actions'


export interface SettingsState {
  bodyScrolled: boolean,
  sideNavActive: boolean,
  sideNavPinned: boolean,
  sideNavClipped: boolean,
  rightSideNavActive: boolean,
  rightSideNavPinned: boolean,
  rightSideNavClipped: boolean
}

type SettingName = keyof SettingsState

interface SettingsPayload {
  name: string
  value?: any
}

export const settingsReducer = (state: SettingsState = {
  bodyScrolled: false,
  sideNavActive: false,
  sideNavPinned: false,
  sideNavClipped: false,
  rightSideNavActive: false,
  rightSideNavPinned: false,
  rightSideNavClipped: true
}, action: PayloadAction<SettingsPayload>) => {
  switch (action.type) {
    case TOGGLE_SETTING:
      let name = action.payload.name
      if (name in state) {
        const settingName = name as SettingName
        const oldSettingValue = state[settingName]
        return { ...state, [name]: !oldSettingValue }
      } else {
        return { ...state, error: '"' + name + '" is not valid setting name' }
      }

    case SET_SETTING:
      return { ...state, [action.payload.name]: action.payload.value }
    default:
      return state
  }
}

export const selectSideNavPinned = (state: RootState) => state.settings.sideNavPinned

export const toggleSetting = createAction<SettingsPayload>(TOGGLE_SETTING)
export const toggleSideNavPinned = () => toggleSetting({ name: 'sideNavPinned'})
