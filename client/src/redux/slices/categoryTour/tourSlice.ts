import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { CategoryTourType, TourType } from '../../../types/tourType';
import {
  // addCategoryTourThunk,
  // changeCategoryTourThunk,
  // deleteCategoryTourThunk,
  getAllCategoryTourThunk,
} from './categoryTourThunkActions';
import { addTourThunk, getAllTourThunk, getFavoritesToursThunk, getOneTourThunk } from './tourThunkActions';

type InitialStateProps = {
  category: CategoryTourType[];
  oneTour: TourType | null;
  tours: TourType[];
  favorites: TourType[];
  allCount: number;
  offset: number;
  filter: number;
  changeCategory: boolean;
};

const initialState: InitialStateProps = {
  category: [],
  oneTour: null,
  tours: [],
  favorites: [],
  allCount: 0,
  offset: 0,
  filter: 0,
  changeCategory: false
};

const tourSlice = createSlice({
  name: 'tour',
  initialState,
  reducers: {


    setSelectedCategoryTour: (state, action: PayloadAction<number>) => {
      state.filter = action.payload;
    },


    changeCategoryTour: (state) => {
      if(state.filter !== 0){
        state.changeCategory = true;
        state.offset = 0;
      } else {
        state.changeCategory = false
        state.offset = 0;
        state.tours = []
      }
     
     
    },


  },

  extraReducers: (builder) => {

    builder.addCase(getAllTourThunk.fulfilled, (state, action) => {

      // allCount равен длине массива приходящего при запросе(чтобы offset не привысил длину массива)
      state.allCount = action.payload.count;

      // добавляем элементы только при условии длины стейта меньше длины исходного массива
      if (state.tours.length < state.allCount) {
        state.tours = [...action.payload.rows, ...state.tours];
      }

      // если выбрана определенная категория, то ее id , будет неравен 0
      // а так же этот айди был изменен нажатием изменением компонента
      // мы не добавляем новый массив а переопределяем стейт а offset 
      // равен длине приходящего массива
      if (state.filter !== 0 && state.changeCategory) {
        state.allCount = action.payload.count;
        state.tours = action.payload.rows;        
        state.offset = state.tours.length;
        // меняем на false чтобы не попадать в условие и
        // не переопределять стейт туров если allCount > limit(параметр запроса из ручки на туры)
        state.changeCategory = false
      }
      state.offset = state.tours.length;

    });

    builder.addCase(addTourThunk.fulfilled, (state, action) => {
      state.tours = [action.payload, ...state.tours];
    });

    builder.addCase(getOneTourThunk.fulfilled, (state, action) => {
      state.oneTour = action.payload
    })

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




    // ИЗБРАННОЕ
    builder.addCase(getFavoritesToursThunk.fulfilled, (state, action) => {
      state.favorites = action.payload;
    });




    // КАТЕГОРИИ
    builder.addCase(getAllCategoryTourThunk.fulfilled, (state, action) => {
      state.category = action.payload;
    });
  },
});

export default tourSlice.reducer;
export const { setSelectedCategoryTour, changeCategoryTour } = tourSlice.actions;
