import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import { dailyWater } from './Water/operations';

const initialState = {
  currentMonth: dayjs().month(),
  currentYear: dayjs().year(),
  selectedDate: dayjs().format('YYYY-MM-DD'),
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    previousMonth: state => {
      if (state.currentMonth === 0) {
        state.currentMonth = 11;
        state.currentYear -= 1;
      } else {
        state.currentMonth -= 1;
      }
    },
    nextMonth: state => {
      if (state.currentMonth === 11) {
        state.currentMonth = 0;
        state.currentYear += 1;
      } else {
        state.currentMonth += 1;
      }
    },
    selectDate: (state, action) => {
      state.selectedDate = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(dailyWater.fulfilled, (state, action) => {
      if (action.meta.arg) {
        state.selectedDate = action.meta.arg;
      }
    });
  },
});

export const { previousMonth, nextMonth, selectDate } = calendarSlice.actions;
export default calendarSlice.reducer;
