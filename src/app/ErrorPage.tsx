import debug from 'debug'
import { useRouteError } from 'react-router-dom'

import { appName } from '../consts'

type ReactRouteError = {
  statusText?: string
  message?: string
}

const log = debug(appName + ':ErrorPage.tsx')

export default function ErrorPage() {
  const error = useRouteError() as ReactRouteError
  log(error)

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
