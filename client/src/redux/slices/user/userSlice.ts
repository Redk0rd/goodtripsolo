import { createSlice } from '@reduxjs/toolkit';
import type { UserType } from '../../../types/authType';
import { updateUserThunk } from './userThunkActrion';

type InitialUserStateProps = {
  editUser: UserType | null;
};

const initialState: InitialUserStateProps = {
  editUser: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(updateUserThunk.fulfilled, (state, action) => {
      const user = action.payload;
      state.editUser = null;
    });
  },
});

export default userSlice.reducer;
