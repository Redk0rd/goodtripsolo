import type { AxiosInstance } from 'axios';
import axiosInstance from './apiInstance';
import type { EquipmentType } from '../types/equipmentType';

class EquipmentService {
  constructor(private readonly api: AxiosInstance) {}

  public getEquipment(): Promise<EquipmentType[]> {
    return this.api.get<EquipmentType[]>('/equip').then((res) => res.data);
  }

  // public addEquipment(equipment: EquipmentType): Promise<EquipmentType> {
  //   return this.api.post<EquipmentType>('/equip', equipment).then((res) => res.data);
  // }

  // public deleteEquipment(id: number): Promise<void> {
  //   return this.api.delete(`/equip/${id}`);
  // }

  // public changeEquipment(id:number): Promise<EquipmentType> {
  //   return this.api.put<EquipmentType>(`/equip/${id}`).then((res)=> res.data)
  // }


  
}

export default new EquipmentService(axiosInstance);
