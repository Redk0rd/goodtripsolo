import { createSlice, isAction } from '@reduxjs/toolkit';
import { addCommentThunk, allCommentsThunk, deleteCommentThunk } from './commentThunkActions';
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
    builder.addCase(addCommentThunk.fulfilled, (state, action) => {
      const newComment = action.payload;
      // state.comments.push(newComment);
      state.comments = [newComment, ...state.comments];
    });
    builder.addCase(deleteCommentThunk.fulfilled, (state, action)=> {
      const id = action.payload;
      console.log('------------', id, action.payload);
      
      state.comments = state.comments.filter((comment)=> comment.id !== Number(id) )
    })
  },
});

export default commentSlice.reducer;
