import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth/authSlice';
import tourSlice from './slices/categoryTour/tourSlice';
import commentSlice from './slices/comments/commentSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tour: tourSlice,
    comment: commentSlice,
  },
});

export type StoreType = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
