import { createSlice } from '@reduxjs/toolkit';
import { addCommentThunk, allCommentsThunk } from './commentThunkActions';
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
    builder.addCase(addCommentThunk.fulfilled, (state, action)=> {
      const newComment = action.payload
      // state.comments.push(newComment);
      state.comments = [newComment, ... state.comments]

    })
  },
 
});

export default commentSlice.reducer;