// Convention:

// ACTION_REQUEST or ACTION
// ACTION_RECEIVED or ACTION_FULLFILLED or ACTION_DONE
// ACTION_ERROR or ACTION_REJECTED
// ACTION_CANCEL

// ACTION - FETCH_USER

export const LOGIN = 'LOGIN'
export const LOGIN_DONE = 'LOGIN_DONE'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGIN_CLEANUP = 'LOGIN_CLEANUP'

export const LOGOFF = 'LOGOFF'
export const LOGOFF_DONE = 'LOGOFF_DONE'
export const LOGOFF_ERROR = 'LOGOFF_ERROR'

export const TOGGLE_SETTING = 'TOGGLE_SETTING'
export const SET_SETTING = 'SET_SETTING'

export const logIn = (login, password) => ({
    type: LOGIN,
    login,
    password
})

export const logInDone = (payload) => ({
    type: LOGIN_DONE,
    payload
})

export const logInError = (payload) => ({
    type: LOGIN_ERROR,
    payload,
    error: true
})

export const logInCleanup = () => ({
    type: LOGIN_CLEANUP
})

// Log off actions
export const logOff = () => ({
    type: LOGOFF
})

export const logOffDone = (payload) => ({
    type: LOGOFF_DONE,
    payload
})

export const logOffError = (payload) => ({
    type: LOGOFF_ERROR,
    payload,
    error: true
})

export const toggleSetting = (payload) => ({
    type: TOGGLE_SETTING,
    payload
})

export const setSetting = (name, value) => ({
    type: SET_SETTING,
    payload: { name, value }
})
