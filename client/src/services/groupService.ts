import type { AxiosInstance } from 'axios';
import axiosInstance from './apiInstance';
import type { GroupType } from '../types/GroupType';

class GroupService {
  constructor(private readonly api: AxiosInstance) {}

  public getGroups(): Promise<GroupType[]> {
    return this.api.get<Promise<GroupType[]>>('/group').then((res) => res.data);
  }
}


export default new GroupService(axiosInstance);