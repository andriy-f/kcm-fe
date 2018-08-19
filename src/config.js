const clientSideApiUrl = (typeof window !== 'undefined' && window.kcm && window.kcm.apiUrl) || null
export const BACKEND_URL = clientSideApiUrl || process.env.REACT_APP_KCM_BACKEND_URL
