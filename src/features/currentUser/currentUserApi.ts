
import { urlJoin } from '../../utils'
import { APIURL } from '../../config'
import { LoginData } from '../../types/LoginData'

const loginUrl = urlJoin(APIURL, '/account/logInWithCookie')
// const logoutUrl = urlJoin(APIURL, '/account/clearCookie')

export function requestLogIn(loginData: LoginData) {
  return fetch(loginUrl, {
    credentials: 'include',
    method: 'POST',
    mode: 'cors',
    headers: [['Content-Type', 'application/json']],
    body: JSON.stringify(loginData),
  })
  .then(res => {
    if(!res.ok) {
      throw new Error('login request error' + res.status)
    }

    return res.json()
  })
}
