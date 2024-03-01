import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

import type { CategoryTourType } from '../../types/tourType'




const initialState: CategoryTourType ={
    id: 0,
    name: '',
    tours: []
}


const tourSlice = createSlice({
    name: 'tour',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getAllCategoryTourThunk.fulfilled, (state, action) => {
            state = action.payload
        })

        // builder.addCase(addCategoryTourThunk.)
    }


})