import { configureStore } from '@reduxjs/toolkit';
import { waterReducer } from './Water/waterSlice';

export const store = configureStore({
  reducer: {
    water: waterReducer,
  },
});
