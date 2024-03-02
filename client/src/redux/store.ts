import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import tourSlice from './slices/tourSlice';



export const store = configureStore({
  reducer: {

    auth: authReducer,
    tour: tourSlice,
  },
});

export type StoreType = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
