import type { AxiosInstance, AxiosResponse } from 'axios';
import axiosInstance from './apiInstance';
import type { FavoriteType, TourType } from '../types/tourType';
import { UserType } from '../types/authType';

class FavoriteService {
  constructor(private readonly api: AxiosInstance) {}

  public getFavorites(): Promise<FavoriteType[]> {
    return this.api.get<FavoriteType[]>('/favorite').then((res) => res.data);
  }

  public addFavorite(id: TourType['id']): Promise<FavoriteType> {
    return this.api.post<FavoriteType>(`/favorite/${id}`).then((res)=> res.data)
  }

  public deleteFavorite(id: TourType['id']): Promise<AxiosResponse> {
    return this.api.delete<void>(`/favorite/${id}`)
  }

}

export default new FavoriteService(axiosInstance);
