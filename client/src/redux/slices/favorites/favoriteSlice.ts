import { createSlice } from '@reduxjs/toolkit';
import type { FavoriteTypeState } from '../../../types/tourType';
import { addFavoriteThunk, deleteFavoriteThunk, getFavoritesToursThunk, statusFavoriteThunk } from './favoriteThunkActions';

const initialState: FavoriteTypeState = {
  favorites: [],
  favTours: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFavoritesToursThunk.fulfilled, (state, action)=> {
        state.favorites = action.payload
        state.favTours = action.payload.map((fav)=> fav.Tour)
    })
    builder.addCase(addFavoriteThunk.fulfilled, (state, action)=> {
        const newFav = action.payload.Tour;
        console.log(newFav, 'SANKIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII');
        
        state.favTours = [newFav, ...state.favTours]

        
    })
    builder.addCase(deleteFavoriteThunk.fulfilled, (state, action)=> {
        const id = action.payload
        state.favTours = state.favTours.filter((tour)=> id !== tour.id)
        
  })
    // builder.addCase(statusFavoriteThunk.fulfilled, (state, action)=> {
    //   const id = action.payload
    //   // state.favorites = state.favorites.map((fav) => (id === fav.id ? [...state.favorites, ]))
    // })
  },
});

export default favoriteSlice.reducer;
