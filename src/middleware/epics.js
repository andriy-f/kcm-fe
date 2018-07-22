import { ajax } from 'rxjs/observable/dom/ajax'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'
import { combineEpics, createEpicMiddleware } from 'redux-observable'
import debug from 'debug'

import { BACKEND_URL } from '../config'
import { appName } from '../consts'
import { commonAjaxRequestSettings } from '../utils'
import {
  LOGIN, logInDone, logInError,
  LOGOFF, logOffDone, logOffError
} from '../actions'
import { urlJoin } from '../utils'

// eslint-disable-next-line
const logger = debug(appName + ':epics.js')
const loginUrl = urlJoin(BACKEND_URL, '/account/logInWithCookie')
const logoutUrl = urlJoin(BACKEND_URL, '/account/clearCookie')

const requestAuthenticateEpic = action$ =>
  action$.ofType(LOGIN)
    .mergeMap(action => ajax({
      ...commonAjaxRequestSettings,
      url: loginUrl,
      method: 'POST',
      body: { login: action.login, password: action.password },
    })
      .map(response => logInDone(response.response))
      .catch((error) => {
        logger('Login Error', error)
        return Observable.of(logInError(error))
      })
    )

const requestLogoffEpic = action$ =>
  action$.ofType(LOGOFF)
    .mergeMap(action => ajax({
      ...commonAjaxRequestSettings,
      url: logoutUrl,
      method: 'POST'
    })
      .map(response => logOffDone(response.response))
      .catch(error => Observable.of(logOffError(error)))
    )

const rootEpic = combineEpics(
  requestAuthenticateEpic,
  requestLogoffEpic
)

export const epicMiddleware = createEpicMiddleware(rootEpic)
