export const isDev = process.env.NODE_ENV === 'development'
export const commonAjaxRequestSettings = {
    crossDomain: true,
    withCredentials: true,
    responseType: 'json'
}

export const isUserLoggedIn = (currentUser) => {
    return Object.keys(currentUser).length !== 0 && currentUser.exp * 1000 >= Date.now();
}