import { createAsyncThunk } from '@reduxjs/toolkit';
import apiService from '../../../services/tourService';

import type { CategoryTourType, TourCountType, TourType } from '../../../types/tourType';

// export const getTours = createAsyncThunk<{justTours: TourType[], tours: CategoryTourType[]}>('tours/all', async () => {
//   const tours = await apiService.getTours();
//   return tours;
// });

export const addTourThunk = createAsyncThunk<TourType, TourType>('tour/add', async (obj) => {
  const tour = await apiService.addTour(obj);
  return tour;
});

// export const deleteTour = createAsyncThunk<number, number>('tour/delete', async (id) => {
//   await apiService.deleteTour(id);
//   return id;
// });

// export const changeTour = createAsyncThunk<TourType, number>('tour/change', async (id) => {
//   const updateTour = await apiService.changeTour(id);
//   return updateTour;
// });

export const getAllTourThunk = createAsyncThunk<TourCountType, { id: number; offset: number }>(
  'Tour/all',
  async ({ id, offset }) => {
    const allTour = await apiService.getTours(id, offset);
    return allTour;
  },
);

// export const getFavoritesToursThunk = createAsyncThunk<TourType[]>('Favorites/all', async () => {
//   const allFavoritesTours = await apiService.getFavoritesTours();
//   return allFavoritesTours;
// });
