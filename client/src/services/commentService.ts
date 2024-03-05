import type { AxiosInstance, AxiosResponse } from 'axios';
import { Axios } from 'axios';
import axiosInstance from './apiInstance';
import type { CommentTourType, TourType } from '../types/tourType';

class CommentService {
  constructor(private readonly api: AxiosInstance) {}

  public getAllComments(id: number): Promise<CommentTourType[]> {
    return this.api.get<CommentTourType[]>(`/comments/${id}`).then((res) => res.data);
  }

  public addComment({tourId, title, userId}: {tourId:number, title: string, userId:number}): Promise<CommentTourType> {
    return this.api.post<CommentTourType>(`/comments/${tourId}`,{title, userId}).then((res)=>res.data)
  }

  public deleteComment(id: CommentTourType['id']): Promise<AxiosResponse> {
    console.log('apiiiiiii -------',id);
    
    return this.api.delete<void>(`/comments/${id}`)
  }
}

export default new CommentService(axiosInstance);
