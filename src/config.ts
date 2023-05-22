// This is set up in production mode
const clientSideApiUrl = (
  typeof window !== 'undefined'
  && window.kcm
  && window.kcm.apiUrl
) || null

// process.env.REACT_APP_KCM_BACKEND_URL is set up in development mode
// URL to the KCM backend
export const beUrl = process.env.REACT_APP_KCM_BACKEND_URL || clientSideApiUrl

export const shouldLogRedux =
  process.env.CI !== 'true' &&
  process.env.NODE_ENV === 'development'

export const isDevEnv = process.env.NODE_ENV === 'development'
