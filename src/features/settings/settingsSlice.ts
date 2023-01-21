import { createAction, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../../app/store'

export const TOGGLE_SETTING = 'settings/toggle'
export const SET_SETTING = 'settings/set'

export interface SettingsState {
  bodyScrolled: boolean,
  sideNavActive: boolean,
  sideNavPinned: boolean,
  sideNavClipped: boolean,
  rightSideNavActive: boolean,
  rightSideNavPinned: boolean,
  rightSideNavClipped: boolean
}

const initialSettings: SettingsState = {
  bodyScrolled: false,
  sideNavActive: false,
  sideNavPinned: false,
  sideNavClipped: false,
  rightSideNavActive: false,
  rightSideNavPinned: false,
  rightSideNavClipped: true
}

type SettingName = keyof SettingsState

interface SettingsPayload {
  name: SettingName
  value?: any
}

export const settingsReducer = (state = initialSettings, action: PayloadAction<SettingsPayload>) => {
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
export const selectSideNavClipped = (state: RootState) => state.settings.sideNavClipped
export const selectBodyScrolled = (state: RootState) => state.settings.bodyScrolled

export const toggleSetting = createAction<SettingsPayload>(TOGGLE_SETTING)
export const toggleSideNavPinned = () => toggleSetting({ name: 'sideNavPinned'})
export const setSetting = createAction<SettingsPayload>(SET_SETTING)


// export const setSetting = (name: string, value: any) => ({
//     type: SET_SETTING,
//     payload: { name, value }
// })
