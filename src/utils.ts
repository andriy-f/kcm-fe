import URI from 'urijs'

export const isDev = process.env.NODE_ENV === 'development'

export const commonAjaxRequestSettings = {
  crossDomain: true,
  withCredentials: true,
  responseType: 'json',
}

const switchcaseSimple = (cases: { [prop: string]: unknown})  => (defaultCase: unknown) => (key: string) =>
  key in cases ? cases[key] : defaultCase

const executeIfFunction = (f: any) =>
  f instanceof Function ? f() : f

export const switchcase = (cases: { [prop: string]: unknown})  => (defaultCase: unknown) => (key: string) =>
  executeIfFunction(switchcaseSimple(cases)(defaultCase)(key))

// Sample usage in redux reducer
// const counter = (state = 0, action) =>
//     switchcase({
//         'RESET': 0,
//         'INCREMENT': () => state + 1,
//         'DECREMENT': () => state - 1
//     })(state)(action.type)

export const getUserFriendlyErrorMessage = (error: any) => {
  let errorMessage = undefined

  switch (error && error.status) {
    case 0:
      errorMessage = 'Network error' // may also be timeout or abort
      return errorMessage
    default:
      errorMessage = error && error.message
  }

  const errorResponseMessage = error && error.xhr
    && error.xhr.response && error.xhr.response.message

  return [errorMessage, errorResponseMessage]
    .filter(val => val)
    .join(' ')
}

export const urlJoin = (baseUrl: string, url: string) => {
  var theUrl = new URI(url)
  if (theUrl.is('relative')) {
    theUrl = theUrl.absoluteTo(baseUrl)
  }

  return theUrl.toString()
}
