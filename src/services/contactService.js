const contactSearchFields = ['firstName', 'lastName', 'phoneNumber', 'email']

export const getContactsFetchUrl = (filterText, skip, top) => {
    let queryOptions = [
        filterText ? '$filter=' + contactSearchFields.map(fieldName => `contains(${fieldName}, '${filterText}')`).join(' or ') : undefined,
        skip ? `$skip=${skip}` : undefined,
        top ? `$top=${top}` : undefined,
    ].filter(q => q)

    return queryOptions.length > 0
        ? '?' + queryOptions.join('&')
        : ''
}