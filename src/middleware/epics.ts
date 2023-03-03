//TODO use or delete. Currently unused
import { ajax } from 'rxjs/observable/dom/ajax'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'
import { combineEpics, createEpicMiddleware } from 'redux-observable'
import debug from 'debug'

import { APIURL } from '../config'
import { appName } from '../consts'
import { commonAjaxRequestSettings } from '../utils'
import {
  LOGIN, logInDone, logInError,
  LOGOFF, logOffDone, logOffError
} from '../features/currentUser/userSlice'
import { urlJoin } from '../utils'

// eslint-disable-next-line
const logger = debug(appName + ':epics.js')
const loginUrl = urlJoin(APIURL, '/account/logInWithCookie')
const logoutUrl = urlJoin(APIURL, '/account/clearCookie')

const requestAuthenticateEpic = (action$: any) =>
  action$.ofType(LOGIN)
    .mergeMap((action: any) => ajax({
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

const requestLogoffEpic = (action$: any) =>
  action$.ofType(LOGOFF)
    .mergeMap((action: any) => ajax({
      ...commonAjaxRequestSettings,
      url: logoutUrl,
      method: 'POST'
    })
      .map(response => logOffDone(response.response))
      .catch(error => Observable.of(logOffError(error)))
    )

export const rootEpic = combineEpics(
  requestAuthenticateEpic,
  requestLogoffEpic
)

// TODO deal with as any
// export const epicMiddleware = createEpicMiddleware(rootEpic as any)
