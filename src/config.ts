// This is set up in production mode
const clientSideApiUrl = (
  typeof window !== 'undefined'
  && window.kcm
  && window.kcm.apiUrl
) || null

// VITE_KCM_BACKEND_URL is set up in development mode
const serverSideApiUrl = import.meta.env.VITE_KCM_BACKEND_URL

// URL to the KCM backend
export const beUrl = serverSideApiUrl || clientSideApiUrl

if (!beUrl) {
  throw new Error('Backend URL was not set up.')
}

export const shouldLogRedux =
  import.meta.env.CI !== 'true' &&
  import.meta.env.NODE_ENV === 'development'

export const isDevEnv = import.meta.env.NODE_ENV === 'development'
