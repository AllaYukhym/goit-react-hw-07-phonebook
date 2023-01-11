import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.data.contacts;

export const selectFilter = state => state.filter.letters;

export const selectError = state => state.data.error;

export const selectIsLoading = state => state.data.isLoading;

export const selectVisibleContacts = createSelector(
  [selectFilter, selectContacts],
  (filter, contacts) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
