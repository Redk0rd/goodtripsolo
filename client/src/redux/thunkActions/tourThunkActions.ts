import { createAsyncThunk } from '@reduxjs/toolkit';
import apiService from '../../services/tourService';
import type { TourType } from '../../types/tourType';

export const getTours = createAsyncThunk<TourType[]>('tours/all', async () => {
  const tours = await apiService.getTours();
  return tours;
});

export const addTour = createAsyncThunk<TourType, TourType>('tour/add', async (obj) => {
  const tour = await apiService.addTour(obj);
  return tour;
});

export const deleteTour = createAsyncThunk<number, number>('tour/delete', async (id) => {
  await apiService.deleteTour(id);
  return id;
});

export const changeTour = createAsyncThunk<TourType, number>('tour/change', async (id) => {
  const updateTour = await apiService.changeTour(id);
  return updateTour;
});
