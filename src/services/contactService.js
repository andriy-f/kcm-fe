const contactSearchFields = ['firstName', 'lastName', 'phoneNumber', 'email']

export const getContactsFetchUrl = filterText => {
    return filterText
        ? '?$filter=' + contactSearchFields.map(fieldName => `contains(${fieldName}, '${filterText}')`).join(' or ')
        : ''
}