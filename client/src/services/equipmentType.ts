import type { AxiosInstance } from 'axios';
import axiosInstance from './apiInstance';
import type { EquipmentType } from '../types/equipmentType';

class EquipmentService {
  constructor(private readonly api: AxiosInstance) {}

  public getEquipment(): Promise<EquipmentType[]> {
    return this.api.get<EquipmentType[]>('/api/equip').then((res) => res.data);
  }

  public addEquipment(equipment: EquipmentType): Promise<EquipmentType> {
    return this.api.post<EquipmentType>('/api/equip', equipment).then((res) => res.data);
  }

  public deleteEquipment(id: number): Promise<void> {
    return this.api.delete(`/api/equip/${id}`);
  }

  public changeEquipment(id:number): Promise<EquipmentType> {
    return this.api.put<EquipmentType>(`/api/equip/${id}`).then((res)=> res.data)
  }
}

export default new EquipmentService(axiosInstance);
