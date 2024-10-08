import type { AxiosInstance } from 'axios';
import axiosInstance from './apiInstance';
import type { CategoryTourType, TourType } from '../types/tourType';

class CategoryTourService {
  constructor(private readonly api: AxiosInstance) {}

  public getCategory(): Promise<CategoryTourType[]> {
    return this.api.get<CategoryTourType[]>('/category/tour').then((res) => res.data);
  }

//   public addCategoryTour(categoryTour: { name: string }): Promise<CategoryTourType> {
//     return this.api
//       .post<CategoryTourType>('/api/category/tour', categoryTour)
//       .then((res) => res.data);
//   }

//   public deleteCategoryTour(id: number): Promise<void> {
//     return this.api.delete(`/api/category/tour/${id}`);
//   }

//   public changeCategoryTour(id: number): Promise<CategoryTourType> {
//     return this.api.put<CategoryTourType>(`/api/category/tour/${id}`).then((res) => res.data);
//   }
}

export default new CategoryTourService(axiosInstance);
