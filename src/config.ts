// This is set up in production mode
const clientSideApiUrl = (
  typeof window !== 'undefined'
  && window.kcm
  && window.kcm.apiUrl
) || null

// VITE_KCM_BACKEND_URL is set up in development mode
const serverSideApiUrl = process.env.VITE_KCM_BACKEND_URL

// URL to the KCM backend
export const beUrl = serverSideApiUrl || clientSideApiUrl

if (!beUrl) {
  throw new Error('Backend URL was not set up.')
}

export const shouldLogRedux =
  process.env.CI !== 'true' &&
  process.env.NODE_ENV === 'development'

export const isDevEnv = process.env.NODE_ENV === 'development'
