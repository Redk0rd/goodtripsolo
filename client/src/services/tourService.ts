import type { Axios, AxiosInstance } from 'axios';
import axiosInstance from './apiInstance';
import type { TourType } from '../types/tourType';

class TourService {
  constructor(private readonly api: AxiosInstance) {}

  public getTours(): Promise<TourType[]> {
    return this.api.get<TourType[]>('/api/tour').then((res) => res.data);
  }

  public addTour(tour: TourType): Promise<TourType> {
    return this.api.post<TourType>('/api/tour', tour).then((res) => res.data);
  }

  public deleteTour(id: number): Promise<void> {
    return this.api.delete(`/api/tour/${id}`);
  }

  public changeTour(id: number): Promise<TourType> {
    return this.api.put<TourType>(`/api/tour/${id}`).then((res)=> res.data)
  }
}

export default new TourService(axiosInstance);
