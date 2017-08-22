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
    isFetchingAnywhere: state.authenticationPage.isFetching || state.contactsPage.isFetching
})

const switchcase = cases => defaultCase => key =>
    key in cases ? cases[key] : defaultCase

const executeIfFunction = f =>
    f instanceof Function ? f() : f

const switchcaseF = cases => defaultCase => key =>
    executeIfFunction(switchcase(cases)(defaultCase)(key))

// Sample usage as redux reduser
// const counter = (state = 0, action) =>
//     switchcaseF({
//         'RESET': 0,
//         'INCREMENT': () => state + 1,
//         'DECREMENT': () => state - 1
//     })(state)(action.type)