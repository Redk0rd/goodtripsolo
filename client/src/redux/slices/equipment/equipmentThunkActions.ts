import { createAsyncThunk } from '@reduxjs/toolkit';
import apiService from '../../../services/equipmentService';
import type { EquipmentCountType } from '../../../types/equipmentType';

export const getAllEquipmentThunk = createAsyncThunk<EquipmentCountType, { id: number; offset: number }>(
  'Equipment/all',
  async ({ id, offset }) => {
    const allEquipment = await apiService.getEquipments(id, offset);
    return allEquipment;
  },
);

