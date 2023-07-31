// redux/contacts/contactsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com';

// Función para obtener todos los contactos del usuario
export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
    const response = await axios.get(`${BASE_URL}/contacts`);
    return response.data;
});

// Función para agregar un nuevo contacto
export const addContact = createAsyncThunk('contacts/addContact', async (contactData) => {
    const response = await axios.post(`${BASE_URL}/contacts`, contactData);
    return response.data;
});

// Función para eliminar un contacto existente
export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId) => {
    await axios.delete(`${BASE_URL}/contacts/${contactId}`);
    return contactId;
});

// Función para actualizar un contacto existente
export const updateContact = createAsyncThunk('contacts/updateContact', async (contactData) => {
    const response = await axios.patch(`${BASE_URL}/contacts/${contactData.id}`, contactData);
    return response.data;
});

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.contacts = action.payload;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(addContact.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.contacts.push(action.payload);
            })
            .addCase(addContact.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(deleteContact.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
            })
            .addCase(deleteContact.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(updateContact.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(updateContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.contacts = state.contacts.map((contact) =>
                    contact.id === action.payload.id ? action.payload : contact
                );
            })
            .addCase(updateContact.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export default contactsSlice.reducer;