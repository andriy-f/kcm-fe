import URI from 'urijs'

export const isDev = process.env.NODE_ENV === 'development'

export const commonAjaxRequestSettings = {
  crossDomain: true,
  withCredentials: true,
  responseType: 'json',
}

export const isUserLoggedIn = (currentUser: any) => {
  return currentUser && Object.keys(currentUser).length !== 0
    && currentUser.tokenExpiresOn >= Date.now()
}

export const getViewState = (state: any) => ({
  ...state,
  isFetchingAnywhere: state.logIn.isFetching
})

const switchcaseSimple = (cases: { [prop: string]: string })  => (defaultCase: string) => (key: string) =>
  key in cases ? cases[key] : defaultCase

const executeIfFunction = (f: any) =>
  f instanceof Function ? f() : f

export const switchcase = (cases: { [prop: string]: string })  => (defaultCase: string) => (key: string) =>
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
