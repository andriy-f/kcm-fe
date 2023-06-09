
import { urlJoin } from '../../utils'
import { beUrl } from '../../config'
import { LoginData } from '../../types/LoginData'

const loginUrl = urlJoin(beUrl, '/account/logInWithCookie')

const fetchParams: RequestInit = {
    credentials: 'include',
    method: 'POST',
    mode: 'cors',
}

export function requestLogIn(loginData: LoginData) {
  return fetch(loginUrl, {
    ...fetchParams,
    body: new URLSearchParams({ ...loginData }),
  })
  .then(res => {
    if(!res.ok) {
      throw new Error('login request error' + res.status)
    }

    return res.json()
  })
}

const logoutUrl = urlJoin(beUrl, '/account/clearCookie')

export function requestLogout() {
  return fetch(logoutUrl, {
    ...fetchParams,
  })
  .then(res => {
    if(!res.ok) {
      throw new Error('logout request error' + res.status)
    }

    return res.json()
  })
}
