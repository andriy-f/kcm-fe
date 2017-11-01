const contactSearchFields = ['firstName', 'lastName', 'phoneNumber', 'email']

export const getContactsFetchUrl = (filterText, skip, top, includecount) => {
    let queryOptions = [
        filterText ? '$filter=' + contactSearchFields.map(fieldName => `contains(${fieldName}, '${filterText}')`).join(' or ') : undefined,
        skip ? `$skip=${skip}` : undefined,
        top ? `$top=${top}` : undefined,
        includecount ? '$count=true' : undefined,
    ] // functional dynamic query string formatting
        .filter(q => q) // filter those query options which are not undefined

    return queryOptions.length > 0
        ? '?' + queryOptions.join('&')
        : '' // return formatted query
}