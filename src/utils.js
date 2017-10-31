export const isDev = process.env.NODE_ENV === 'development'

export const commonAjaxRequestSettings = {
    crossDomain: true,
    withCredentials: true,
    responseType: 'json',
}

export const commonAjaxODataRequestSettings = {
    ...commonAjaxRequestSettings,
    headers: { 'Content-Type': 'application/json' },
}

export const isUserLoggedIn = (currentUser) => {
    return currentUser && Object.keys(currentUser).length !== 0
        && currentUser.tokenExpiresOn >= Date.now();
}

export const json = body => JSON.stringify(body !== undefined ? body : {})

export const getViewState = state => ({
    ...state,
    isFetchingAnywhere: state.logIn.isFetching || state.contactsPage.isFetching
})

const switchcaseSimple = cases => defaultCase => key =>
    key in cases ? cases[key] : defaultCase

const executeIfFunction = f =>
    f instanceof Function ? f() : f

export const switchcase = cases => defaultCase => key =>
    executeIfFunction(switchcaseSimple(cases)(defaultCase)(key))

// Sample usage in redux reducer
// const counter = (state = 0, action) =>
//     switchcase({
//         'RESET': 0,
//         'INCREMENT': () => state + 1,
//         'DECREMENT': () => state - 1
//     })(state)(action.type)

export const getUserFriendlyErrorMessage = (error) => {
    let errorMessage = undefined

    switch (error && error.status) {
        case 0:
            errorMessage = 'Network error' // may also be timeout or abort
            return errorMessage
        default:
            errorMessage = error && error.message
    }

    const errorResponse = error && error.xhr.response
    const errorResponseMessage = errorResponse && errorResponse.message
    errorMessage = errorMessage ? errorMessage + ' ' + errorResponseMessage : errorResponseMessage

    return errorMessage
}