import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { CategoryEquipmentType, EquipmentType } from '../../../types/equipmentType';

import { getAllEquipmentThunk } from './equipmentThunkActions';
import { getAllEquipmentCategoryThunk } from './equipmentCategoryThunkAction';

type InitialStateProps = {
  equipment: EquipmentType[];
  oneEquipment: EquipmentType | null;
  category: CategoryEquipmentType[];
  allCount: number;
  offset: number;
  filter: number;
  changeCategory: boolean;
};

const initialState: InitialStateProps = {
  equipment: [],
  oneEquipment: null,
  category: [],
  allCount: 0,
  offset: 0,
  filter: 0,
  changeCategory: false,
};

const equipmentSlice = createSlice({
    name: 'equipment',
    initialState,
    reducers: {
        setSelectedCategoryEquipment: (state, action: PayloadAction<number>) => {
            state.filter  = action.payload;
          },

          changeCategoryEquipment: (state) => {
            if(state.filter !== 0){
              state.changeCategory = true;
              state.offset = 0;
            } else {
              state.changeCategory = false
              state.offset = 0;
              state.equipment = []
            }
          },

    },

  

      extraReducers: (builder) => {

        builder.addCase(getAllEquipmentThunk.fulfilled, (state, action) => {
    
          // allCount равен длине массива приходящего при запросе(чтобы offset не привысил длину массива)
          state.allCount = action.payload.count;
    
          // добавляем элементы только при условии длины стейта меньше длины исходного массива
          if (state.equipment.length < state.allCount) {
            state.equipment = [...action.payload.rows, ...state.equipment];
          }
    
          // если выбрана определенная категория, то ее id , будет неравен 0
          // а так же этот айди был изменен нажатием изменением компонента
          // мы не добавляем новый массив а переопределяем стейт а offset 
          // равен длине приходящего массива
          if (state.filter !== 0 && state.changeCategory) {
            state.allCount = action.payload.count;
            state.equipment = action.payload.rows;        
            state.offset = state.equipment.length;
            // меняем на false чтобы не попадать в условие и
            // не переопределять стейт туров если allCount > limit(параметр запроса из ручки на туры)
            state.changeCategory = false
          }
          state.offset = state.equipment.length;
    
        });


        builder.addCase(getAllEquipmentCategoryThunk.fulfilled, (state, action)  => {
          state.category = action.payload
        })


    
      },
    });
    
    export default equipmentSlice.reducer;
    export const { setSelectedCategoryEquipment, changeCategoryEquipment } = equipmentSlice.actions;
    