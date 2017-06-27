export const isDev = process.env.NODE_ENV === 'development'
export const commonAjaxRequestSettings = {
    crossDomain: true,
    withCredentials: true,
    responseType: 'json'
}