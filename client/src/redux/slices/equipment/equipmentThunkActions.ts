import { createAsyncThunk } from '@reduxjs/toolkit';
import apiService from '../../../services/equipmentService';
import type { EquipmentCountType, EquipmentType } from '../../../types/equipmentType';

export const getAllEquipmentThunk = createAsyncThunk<
  EquipmentCountType,
  { id: number; offset: number }
>('Equipment/all', async ({ id, offset }) => {
  const allEquipment = await apiService.getEquipments(id, offset);
  return allEquipment;
});

export const addEquipThunk = createAsyncThunk<EquipmentType, EquipmentType>(
  'equip/add',
  async (obj) => {
    const equip = await apiService.addEquipment(obj);
    return equip;
  },
);
export const getOneEquipThunk = createAsyncThunk<EquipmentType, EquipmentType['id']>(
  'equip/One',
  async (id) => {
    const oneEquip = await apiService.getOneEquipment(id);
    return oneEquip;
  },
);
