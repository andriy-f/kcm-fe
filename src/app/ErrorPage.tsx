import debug from 'debug'
import { useRouteError } from 'react-router-dom'

import { appName } from '../consts'

// eslint-disable-next-line no-unused-vars
const log = debug(appName + ':ErrorPage.tsx')

export default function ErrorPage() {
  const error: any = useRouteError()
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
