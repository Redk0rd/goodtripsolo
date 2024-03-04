import type { AxiosInstance } from 'axios';
import { Axios } from 'axios';
import axiosInstance from './apiInstance';
import type { CommentTourType, TourType } from '../types/tourType';

class CommentService {
  constructor(private readonly api: AxiosInstance) {}

  public getAllComments(id: number): Promise<CommentTourType[]> {
    return this.api.get<CommentTourType[]>(`/comments/${id}`).then((res) => res.data);
  }
}

export default new CommentService(axiosInstance);
