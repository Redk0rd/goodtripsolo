import { createSlice } from '@reduxjs/toolkit';
import type { FavoriteTypeState } from '../../../types/tourType';
import { addFavoriteThunk, deleteFavoriteThunk, getFavoritesToursThunk } from './favoriteThunkActions';

const initialState: FavoriteTypeState = {
  favorites: [],
  isFavorite: false
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFavoritesToursThunk.fulfilled, (state, action)=> {
        state.favorites = action.payload
    })
    builder.addCase(addFavoriteThunk.fulfilled, (state, action)=> {
        const newFav = action.payload;
        state.favorites = [...state.favorites, newFav]
        state.isFavorite = true;
    })
    builder.addCase(deleteFavoriteThunk.fulfilled, (state, action)=> {
        const id = action.payload
        state.favorites = state.favorites.filter((favorite)=> id !== favorite.id)
        state.isFavorite = false;
    })
  },
});

export default favoriteSlice.reducer;
