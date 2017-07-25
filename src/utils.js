export const isDev = process.env.NODE_ENV === 'development'

export const commonAjaxRequestSettings = {
    crossDomain: true,
    withCredentials: true,
    responseType: 'json'
}

export const isUserLoggedIn = (currentUser) => {
    return currentUser && Object.keys(currentUser).length !== 0
        && currentUser.tokenExpiresOn >= Date.now();
}

export const json = body => JSON.stringify(body !== undefined ? body : {})