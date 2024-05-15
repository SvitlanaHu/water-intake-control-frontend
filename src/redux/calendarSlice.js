import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

const initialState = {
  currentMonth: dayjs().month(), // 0-indexed month
  currentYear: dayjs().year(),
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
  },
});

export const { previousMonth, nextMonth } = calendarSlice.actions;
export default calendarSlice.reducer;
