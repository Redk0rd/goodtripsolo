import { createAsyncThunk } from '@reduxjs/toolkit';
import favoriteService from '../../../services/favoriteService';
import type { TourType } from '../../../types/tourType';

export const getFavoritesToursThunk = createAsyncThunk<TourType[]>('favorite/tours', async () => {
  const favoritesTours = await favoriteService.getFavorites();
  return favoritesTours;
});

export const addFavoriteThunk = createAsyncThunk<TourType, number>('add/favorite', async(id)=> {
    const addFavorite = await favoriteService.addFavorite(id)
    return addFavorite;
});

export const deleteFavoriteThunk = createAsyncThunk<TourType['id'], TourType['id']>('delete/favorite', async (id)=> {
    await favoriteService.deleteFavorite(id)
    return id
})
