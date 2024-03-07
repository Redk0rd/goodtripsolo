import { createAsyncThunk } from '@reduxjs/toolkit';
import apiService from '../../../services/categoryEquipmentService';
import type { CategoryEquipmentType } from '../../../types/equipmentType';

export const getAllEquipmentCategoryThunk = createAsyncThunk<CategoryEquipmentType[]>(
  'EquipmentCategory/all',
  async () => {
    const allEquipmentCategory = await apiService.getCategoryEquipment();
    return allEquipmentCategory;
  },
)