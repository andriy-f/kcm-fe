const clientSideApiUrl = (typeof window !== 'undefined' && window.kcm && window.kcm.apiUrl) || null
export const APIURL = process.env.REACT_APP_KCM_BACKEND_URL || clientSideApiUrl

export const shouldLogRedux =
  process.env.CI !== 'true' &&
  process.env.NODE_ENV === 'development'
