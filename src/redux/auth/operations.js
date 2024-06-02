import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';

axios.defaults.baseURL =
  'https://water-intake-control-backend.onrender.com/api';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

const decodeToken = token => jwtDecode(token);

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/register', credentials);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const verifyPageAction = createAsyncThunk(
  'auth/verifyPage',
  async ({ token, refreshToken }, thunkAPI) => {
    try {
      return { token, refreshToken };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    let persistedToken = state.auth.token;
    const persistedRefreshToken = state.auth.refreshToken;

    if (!persistedToken || !persistedRefreshToken) {
      return thunkAPI.rejectWithValue('No token available');
    }

    try {
      // Перевіряємо час закінчення токену і оновлюємо його лише якщо він не дійсний
      const tokenExpirationTime = decodeToken(persistedToken).exp;
      const currentTime = Math.floor(Date.now() / 1000);

      if (tokenExpirationTime <= currentTime) {
        const res = await axios.post('/users/refresh-tokens', {
          refreshToken: persistedRefreshToken,
        });
        setAuthHeader(res.data.token);
        persistedToken = res.data.token;
      } else {
        setAuthHeader(persistedToken);
      }

      // Виконуємо запит на отримання поточного користувача
      const userResponse = await axios.get('/users/current');

      return {
        user: userResponse.data,
        token: persistedToken,
        refreshToken: persistedRefreshToken,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async (email, thunkAPI) => {
    try {
      const response = await axios.post('/users/password-reset-request', {
        email,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const resetPassword = createAsyncThunk(
//   'auth/resetPassword',
//   async ({ token, password }, thunkAPI) => {
//     try {
//       const response = await axios.post(`/restore-password/${token}`, {
//         password,
//       });
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (values, thunkAPI) => {
    try {
      const response = await axios.patch('users/update', values);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  'auth/updateAvatar',
  async (avatarFormData, thunkAPI) => {
    try {
      const response = await axios.patch('users/avatars', avatarFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
