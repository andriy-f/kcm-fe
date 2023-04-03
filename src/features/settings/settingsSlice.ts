import { createAction, createReducer } from '@reduxjs/toolkit'

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
  rightSideNavClipped: boolean,
  showDrawer: boolean,
}

const initialSettings: SettingsState = {
  bodyScrolled: false,
  sideNavActive: false,
  sideNavPinned: false,
  sideNavClipped: false,
  rightSideNavActive: false,
  rightSideNavPinned: false,
  rightSideNavClipped: true,
  showDrawer: false,
}

type SettingName = keyof SettingsState

interface SettingsPayload {
  name: SettingName
  value?: boolean
}

// Actions
export const toggleSetting = createAction<SettingsPayload>(TOGGLE_SETTING)
export const setSetting = createAction<SettingsPayload>(SET_SETTING)

// Special actions
export const toggleSideNavPinned = () => toggleSetting({ name: 'sideNavPinned' })
export const setShowDrawer = (show: boolean) => setSetting({ name: 'showDrawer', value: show })

// Selectors
export const selectSideNavPinned = (state: RootState) => state.settings.sideNavPinned
export const selectSideNavClipped = (state: RootState) => state.settings.sideNavClipped
export const selectBodyScrolled = (state: RootState) => state.settings.bodyScrolled
export const selectShowDrawer = (state: RootState) => state.settings.showDrawer

// Reducer
export const settingsReducer = createReducer(initialSettings, (builder) => {
  builder.addCase(toggleSetting, (state, action) => {
    let name = action.payload.name
    if (name in state) {
      const settingName = name as SettingName
      const oldSettingValue = state[settingName]
      return { ...state, [name]: !oldSettingValue }
    } else {
      return { ...state, error: '"' + name + '" is not valid setting name' }
    }
  })
  builder.addCase(setSetting, (state, action) => ({ ...state, [action.payload.name]: action.payload.value }))
})
