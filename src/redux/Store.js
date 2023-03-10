import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../redux/slices/authSlice';

export const Store = configureStore({
  reducer: {
    auth: authSlice
  },
})