import { configureStore } from '@reduxjs/toolkit';
import slice from './slices/Slices';

export const store = configureStore({
  reducer: {
    display: slice,
  }
})




