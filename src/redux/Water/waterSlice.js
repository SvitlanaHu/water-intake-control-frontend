import { createSlice } from '@reduxjs/toolkit';
import {
  addWater,
  updateWater,
  deleteWater,
  dailyWater,
  getMonthlyWater,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const waterSlice = createSlice({
  name: 'water',
  initialState: {
    items: [],
    dailyItems: [],
    isLoading: false,
    monthIsLoading: false,
    dailyIsLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(addWater.pending, handlePending)
      .addCase(addWater.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addWater.rejected, handleRejected)
      .addCase(updateWater.pending, handlePending)
      .addCase(updateWater.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(updateWater.rejected, handleRejected)
      .addCase(deleteWater.pending, handlePending)
      .addCase(deleteWater.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteWater.rejected, handleRejected)
      .addCase(dailyWater.pending, state => {
        state.dailyIsLoading = true;
      })
      .addCase(dailyWater.fulfilled, (state, action) => {
        state.dailyIsLoading = false;
        state.error = null;
        state.dailyItems = action.payload.records;
      })
      .addCase(dailyWater.rejected, (state, action) => {
        state.dailyIsLoading = false;
        state.error = action.payload;
      })
      .addCase(getMonthlyWater.pending, state => {
        state.monthIsLoading = true;
      })
      .addCase(getMonthlyWater.fulfilled, (state, action) => {
        state.monthIsLoading = false;
        state.error = null;
        state.items = action.payload.records;
      })
      .addCase(getMonthlyWater.rejected, (state, action) => {
        state.monthIsLoading = false;
        state.error = action.payload;
      });
  },
});

const waterReducer = waterSlice.reducer;
export default waterReducer;
