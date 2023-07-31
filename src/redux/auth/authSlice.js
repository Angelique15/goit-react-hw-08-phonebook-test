// redux/auth/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com/users/signup';

// Función de ayuda para configurar el token de autenticación en las solicitudes
const setAuthToken = (token) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

// Función para registrar un nuevo usuario
export const registerUser = createAsyncThunk('auth/registerUser', async (userData) => {
    const response = await axios.post(`${BASE_URL}/users/signup`, userData);
    setAuthToken(response.data.token); // Configurar el token en las solicitudes
    return response.data;
});

// Función para iniciar sesión de un usuario existente
export const loginUser = createAsyncThunk('auth/loginUser', async (userData) => {
    const response = await axios.post(`${BASE_URL}/users/login`, userData);
    setAuthToken(response.data.token); // Configurar el token en las solicitudes
    return response.data;
});

// Función para cerrar sesión del usuario
export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
    setAuthToken(null); // Eliminar el token de autenticación de las solicitudes
});

// Función para obtener información del usuario actual
export const fetchCurrentUser = createAsyncThunk('auth/fetchCurrentUser', async () => {
    const response = await axios.get(`${BASE_URL}/users/current`);
    return response.data;
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(logoutUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.isLoading = false;
                state.user = null;
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(fetchCurrentUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchCurrentUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
            })
            .addCase(fetchCurrentUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export default authSlice.reducer;