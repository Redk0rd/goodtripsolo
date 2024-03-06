import type { Axios, AxiosInstance } from 'axios';
import axiosInstance from './apiInstance';
import type { CategoryTourType, TourCountType, TourType } from '../types/tourType';

class TourService {
  constructor(private readonly api: AxiosInstance) {}

  // public getTours(): Promise<{justTours: TourType[]}> {
  //   return this.api.get<{justTours: TourType[], tours: CategoryTourType[]}>('/api/tour').then((res) => res.data);
  // }

  public addTour(tour: TourType): Promise<TourType> { // может понадобиться заголовок Multipart/formdata
    return this.api.post<TourType>('/tour', tour).then((res) => res.data);
  }

  // public deleteTour(id: number): Promise<void> {
  //   return this.api.delete(`/api/tour/${id}`);
  // }

  // public changeTour(id: number): Promise<TourType> {
  //   return this.api.put<TourType>(`/api/tour/${id}`).then((res) => res.data);
  // }

  // добавить метод, который будет запрашивать нужное число
  // передавая offset
  //  this.api.get(`/tour/${id}?offset=${offset}`)
  // потом написать thunkAction, который будет вызывать вышеуказанный метод
  // на кнопку повесить dispatch санки
  // getToursOffsetThunk(offset?) -> offset = tours.length


  public getFavoritesTours(): Promise<TourType[]> {
    return this.api.get<TourType[]>(`/favorites`).then((res) => res.data);
  }

  public getTours(id: CategoryTourType['id'],offset: number): Promise<TourCountType> {
    return this.api.get<TourCountType>(`/tour/${id || 0}/offset/${offset || 0}`).then((res) => res.data);
  }
}

export default new TourService(axiosInstance);
