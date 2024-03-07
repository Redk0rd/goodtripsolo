import { createAsyncThunk } from '@reduxjs/toolkit';
import favoriteService from '../../../services/favoriteService';
import type { FavoriteType, TourType } from '../../../types/tourType';

export const getFavoritesToursThunk = createAsyncThunk<FavoriteType[]>('favorite/tours', async () => {
  const favoritesTours = await favoriteService.getFavorites();
  return favoritesTours;
});

export const addFavoriteThunk = createAsyncThunk<FavoriteType, number>('add/favorite', async (id) => {
  const addFavorite = await favoriteService.addFavorite(id);
  return addFavorite;
});

export const deleteFavoriteThunk = createAsyncThunk<FavoriteType['id'], FavoriteType['id']>(
  'delete/favorite',
  async (id) => {
    await favoriteService.deleteFavorite(id);
    return id;
  },
);
