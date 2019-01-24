import { createSelector } from 'reselect'

// export const getContacts = state => state.contacts

export const getContactsData = state => state.data

export const getContactsAsArray = createSelector(
  [getContactsData],
  contactsAsObject =>
    Object.entries(contactsAsObject || {}).map(([id, other]) => ({
      id,
      ...other,
    }))
)