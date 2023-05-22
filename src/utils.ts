export const isDev = process.env.NODE_ENV === 'development'

export const commonAjaxRequestSettings = {
  crossDomain: true,
  withCredentials: true,
  responseType: 'json',
}

const switchcaseSimple = (cases: { [prop: string]: unknown }) => (defaultCase: unknown) => (key: string) =>
  key in cases ? cases[key] : defaultCase

const executeIfFunction = (f: any) =>
  f instanceof Function ? f() : f

export const switchcase = (cases: { [prop: string]: unknown }) => (defaultCase: unknown) => (key: string) =>
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

/**
 * Join baseUrl and url in simple cases
 */
export const urlJoin = (baseUrl: string | null, url: string) => {
  if (!baseUrl) {
    return url
  }

  if (isAbsoluteUrl(url)) {
    return url
  }

  if (isRelativeUrl(url)) {
    return removeTrailing(baseUrl, '/') + '/' + removePrefix(url, '/')
  }
}

export const isAbsoluteUrl = (url: string) => {
  return url.startsWith('http://')
    || url.startsWith('https://')
    || url.startsWith('//')
    || url.startsWith('data:')
    || url.startsWith('mailto:')
    || url.startsWith('tel:')
    // eslint-disable-next-line no-script-url
    || url.startsWith('javascript:')
}

export const isRelativeUrl = (url: string) => {
  return url.startsWith('/') && !url.startsWith('//')
}

export const removeTrailing = (str: string, char: string) => {
  if (char.length !== 1) {
    throw new Error('char must be a single character')
  }

  if (!str.endsWith(char)) {
    return str
  }

  let lastCharIndex = str.length - 1
  while (str[lastCharIndex] === char) {
    lastCharIndex--
  }

  return str.substring(0, lastCharIndex)
}

export const removePrefix = (str: string, prefix: string) => {
  if (!str.startsWith(prefix)) {
    return str
  }

  return str.substring(prefix.length)
}
