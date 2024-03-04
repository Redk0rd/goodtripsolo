import { createAsyncThunk } from '@reduxjs/toolkit';
import commentService from '../../../services/commentService';
import type { CommentTourType } from '../../../types/tourType';

export const allCommentsThunk = createAsyncThunk<CommentTourType[], number>(
  'commentsByTour/all',
  async (id) => {
    const allComments = await commentService.getAllComments(id);
    return allComments;
  },
);
