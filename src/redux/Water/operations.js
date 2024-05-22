import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addWater = createAsyncThunk(
  'water/addWater',
  async (water, thunkAPI) => {
    try {
      const response = await axios.post('/water/', water);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateWater = createAsyncThunk(
  'water/updateWater',
  async ({ waterId, water }, thunkAPI) => {
    try {
      const response = await axios.put(`/water/${waterId}`, water);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteWater = createAsyncThunk(
  'water/deleteWater',
  async (waterId, thunkAPI) => {
    try {
      const response = await axios.delete(`/water/${waterId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const dailyWater = createAsyncThunk(
  'water/dailyWater',
  async (date, thunkAPI) => {
    try {
      const timezone = new Date().getTimezoneOffset();
      const response = await axios.get(`/water/daily/${date}`, {
        params: {
          timezone: timezone,
        },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const todayWater = createAsyncThunk(
  'water/todayWater',
  async (date, thunkAPI) => {
    try {
      const timezone = new Date().getTimezoneOffset();
      const response = await axios.get(`/water/daily/${date}`, {
        params: {
          timezone: timezone,
        },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getMonthlyWater = createAsyncThunk(
  'water/getMonthlyWater',
  async ({ year, month }, thunkAPI) => {
    try {
      const timezone = new Date().getTimezoneOffset();
      const response = await axios.get(`/water/monthly/${year}/${month}`, {
        params: {
          timezone: timezone,
        },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
