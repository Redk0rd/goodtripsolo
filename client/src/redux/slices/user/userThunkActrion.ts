import { createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../../../services/authService';
import type { OneUserType } from '../../../types/tourType';

export const updateUserThunk = createAsyncThunk<
  OneUserType,
  { id: OneUserType['id']; user: OneUserType }
>('user/updateUser', async ({ id, user }) => {
  const data = await authService.updateUser(id, user);
  return data;
});
