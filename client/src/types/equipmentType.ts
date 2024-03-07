import type { OneUserType } from './tourType';

export type EquipmentType = {
  id: number;
  name: string;
  price: number;
  description: string;
  pathImg: string;
  catEId: number;
  userId: number;
  CategoryEquipment?: OneCategoryEquipmentType;
  User?: OneUserType;
};

export type OneCategoryEquipmentType = {
  id: number;
  name: string;
};

export type CategoryEquipmentType = {
  id: number;
  name: string;
  equipments: EquipmentType[];
};

export type EquipmentCountType = {
  count: number;
  rows: [] | EquipmentType[];
};
