import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { CategoryTourType, TourType } from '../../../types/tourType';
import {
  // addCategoryTourThunk,
  // changeCategoryTourThunk,
  // deleteCategoryTourThunk,
  getAllCategoryTourThunk,
} from './categoryTourThunkActions';
import { addTourThunk, getAllTourThunk, getFavoritesToursThunk } from './tourThunkActions';

type InitialStateProps = {
  category: CategoryTourType[];
  tours: TourType[];
  favorites: TourType[];
  allCount: number;
  offset: number;
  filter: number;
};

const initialState: InitialStateProps = {
  category: [],
  tours: [],
  favorites: [],
  allCount: 0,
  offset: 0,
  filter: 0,
};

const tourSlice = createSlice({
  name: 'tour',
  initialState,
  reducers: {
    setSelectedCategoryTour: (state, action: PayloadAction<number>) => {
      state.filter = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getAllTourThunk.fulfilled, (state, action) => {
      
      state.allCount = action.payload.count;
      if (state.tours.length < state.allCount) {
        state.tours = [...action.payload.rows, ...state.tours];
      }
      if (state.filter > 0) {
        state.tours = action.payload.rows
      }
      state.offset = state.tours.length;
    });

    builder.addCase(getFavoritesToursThunk.fulfilled, (state, action) => {
      state.favorites = action.payload;
    });

    builder.addCase(getAllCategoryTourThunk.fulfilled, (state, action) => {
      state.category = action.payload;
    });


    // builder.addCase(addCategoryTourThunk.fulfilled, (state, action) => {
    //   if (state) state.category = [...state.category, action.payload];
    // });

    // builder.addCase(deleteCategoryTourThunk.fulfilled, (state, action) => {
    //   if (state) {
    //     state.category = state?.category.filter((category) => category.id !== action.payload);
    //   }
    // });

    // builder.addCase(changeCategoryTourThunk.fulfilled, (state, action) => {
    //   if (!state) return;
    //   state.category = state?.category.map((category) =>
    //     action.payload.id === category.id ? action.payload : category
    //   );
  },
});

export default tourSlice.reducer;
export const { setSelectedCategoryTour } = tourSlice.actions