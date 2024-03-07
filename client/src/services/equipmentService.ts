import type { AxiosInstance } from 'axios';
import axiosInstance from './apiInstance';
import type { CategoryEquipmentType, EquipmentCountType, EquipmentType } from '../types/equipmentType';

class EquipmentService {
  constructor(private readonly api: AxiosInstance) {}

  public getEquipments(id: CategoryEquipmentType['id'],offset: number): Promise<EquipmentCountType> {
    return this.api.get<EquipmentCountType>(`/equip/${id || 0}/offset/${offset || 0}`).then((res) => res.data);
  }

  public addEquipment(equipment: EquipmentType): Promise<EquipmentType> {
    return this.api.post<EquipmentType>('/equip', equipment).then((res) => res.data);
  }

  public getOneEquipment(id: EquipmentType['id']): Promise<EquipmentType> {
    return this.api.get<EquipmentType>(`/equip/one/${id}`).then((res) => res.data);
  }

  // public deleteEquipment(id: number): Promise<void> {
  //   return this.api.delete(`/equip/${id}`);
  // }

  // public changeEquipment(id:number): Promise<EquipmentType> {
  //   return this.api.put<EquipmentType>(`/equip/${id}`).then((res)=> res.data)
  // }


  
}

export default new EquipmentService(axiosInstance);
