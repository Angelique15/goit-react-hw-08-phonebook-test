// Get all contacts
export const selectAllContacts = (state) => state.contacts.contacts;

// Get loading state
export const selectLoading = (state) => state.contacts.isLoading;

// Get error state
export const selectError = (state) => state.contacts.error;

