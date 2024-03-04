import { createAsyncThunk } from '@reduxjs/toolkit';
import apiService from '../../services/categoryTourService';
import type { CategoryTourType, TourType } from '../../types/tourType';

export const getAllCategoryTourThunk = createAsyncThunk<CategoryTourType[]>(
  'categoryTour/all',
  async () => {
    const allCategoryTour = await apiService.getCategory();
    return allCategoryTour;
  },
);

// export const addCategoryTourThunk = createAsyncThunk<CategoryTourType, { name: string }>(
//   'categoryTour/add',
//   async (obj) => {
//     const categoryTour = await apiService.addCategoryTour(obj);
//     return categoryTour;
//   },
// );

// export const deleteCategoryTourThunk = createAsyncThunk<number, number>(
//   'categoryTour/delete',
//   async (id) => {
//     await apiService.deleteCategoryTour(id);
//     return id;
//   },
// );

// export const changeCategoryTourThunk = createAsyncThunk<CategoryTourType, number>(
//   'categoryTour/change',
//   async (id) => {
//     const categoryTourUpdated = await apiService.changeCategoryTour(id);
//     return categoryTourUpdated;
//   },
// );
