import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
  'https://water-intake-control-backend.onrender.com/api';
// axios.defaults.baseURL = 'http://localhost:3005/api';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  // axios.defaults.headers.common.RefreshToken = refreshToken;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// const config = {
//   headers: {
//     'Content-Type': 'multipart/form-data'
//   }
// };

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
      setAuthHeader(
        res.data.token
        // refreshToken: res.data.refreshToken,
      );
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
  async ({ token } = {}, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token || token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const sendResetEmail = createAsyncThunk(
  'auth/sendResetEmail',
  async (email, thunkAPI) => {
    try {
      const response = await axios.post('/forgot-password', { email });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async ({ token, password }, thunkAPI) => {
    try {
      const response = await axios.post(`/restore-password/${token}`, {
        password,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const updateUser = createAsyncThunk('auth/updateUser', async (values, thunkAPI) => {
  try {
    const response = await axios.patch('users/update', values);
    return response.data
  } catch (e) {
    console.log(e)
    return thunkAPI.rejectWithValue(e.message);
  }

})



export const updateAvatar = createAsyncThunk('auth/updateAvatar', async (avatarFormData, thunkAPI) => {
  try {
    const response = await axios.patch('users/avatars', avatarFormData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(response)
    return response.data
  } catch (e) {
    console.log(e)
    return thunkAPI.rejectWithValue(e.message);
  }

})
