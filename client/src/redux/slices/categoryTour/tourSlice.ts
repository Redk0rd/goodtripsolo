import { createSlice } from '@reduxjs/toolkit';

import type { CategoryTourType, TourType } from '../../../types/tourType';
import {
  // addCategoryTourThunk,
  // changeCategoryTourThunk,
  // deleteCategoryTourThunk,
  getAllCategoryTourThunk,
} from './categoryTourThunkActions';
import { getAllTourThunk } from './tourThunkActions';

type InitialStateProps = {
  category: CategoryTourType[];
  tours: TourType[];
};
/* {

category: Category[]
tours: Tour[]

}
*/
const initialState: InitialStateProps = {
  category: [],
  tours: [],
};

// const initialState: CategoryTourType[] = []

const tourSlice = createSlice({
  name: 'tour',
  initialState,
  reducers: {
    // addTours: ( state ) => {
    //     state.tours = state.category.map((el) => el.tours)
    // }
  },

  extraReducers: (builder) => {

    


    builder.addCase(getAllTourThunk.fulfilled, (state, action) => {
      state.tours = action.payload;
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
    // });

    builder.addCase(getAllCategoryTourThunk.fulfilled, (state, action) => {
      state.category = action.payload;
    });
  },
});

export default tourSlice.reducer;
