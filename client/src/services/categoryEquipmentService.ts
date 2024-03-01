import type { AxiosInstance } from 'axios';
import axiosInstance from './apiInstance';
import type { CategoryEquipmentType } from '../types/equipmentType';

class CategoryEquipmentService {
  constructor(private readonly api: AxiosInstance) {}

  public getCategoryEquipment(): Promise<CategoryEquipmentType[]> {
    return this.api.get<CategoryEquipmentType[]>('/api/category/equip').then((res) => res.data);
  }

  public addCategoryEquipment(categoryEquipment: { name: string }): Promise<CategoryEquipmentType> {
    return this.api
      .post<CategoryEquipmentType>('/api/category/equip', categoryEquipment)
      .then((res) => res.data);
  }

  public deleteCategoryEquipment(id: number): Promise<void> {
    return this.api.delete(`/api/category/equip/${id}`);
  }

  public changeCategoryEquipment(id: number): Promise<CategoryEquipmentType> {
    return this.api.put<CategoryEquipmentType>(`/api/category/equip/${id}`).then((res)=> res.data)
  }
}

export default new CategoryEquipmentService(axiosInstance);
