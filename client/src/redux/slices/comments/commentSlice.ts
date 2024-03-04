import { createSlice } from '@reduxjs/toolkit';
import { allCommentsThunk } from './commentThunkActions';
import type { CommentsTypeState } from '../../../types/tourType';
import { CommentTourType } from '../../../types/tourType';

const initialState: CommentsTypeState = {
  comments: [],
};

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(allCommentsThunk.fulfilled, (state, action) => {
      state.comments = action.payload;
    });
  },
});

export default commentSlice.reducer;