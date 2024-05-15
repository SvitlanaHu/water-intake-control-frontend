import { configureStore } from '@reduxjs/toolkit';
import waterReducer from './Water/waterSlice';
import calendarReducer from './calendarSlice';

export const store = configureStore({
  reducer: {
    water: waterReducer,
    calendar: calendarReducer,
  },
});
