import type { AxiosInstance, AxiosResponse } from 'axios';
import type { AuthStateType, UserSignInType, UserSignUpType, UserType } from '../types/authType';
import axiosInstance from './apiInstance';
import type { OneUserType } from '../types/tourType';

class AuthService {
  constructor(private readonly api: AxiosInstance) {}

  public checkToken(): Promise<AuthStateType> {
    return this.api.get<AuthStateType>('/tokens/refresh').then((res) => res.data);
  }

  public signIn(data: UserSignInType): Promise<AuthStateType> {
    return this.api.post<AuthStateType>('/auth/login', data).then((res) => res.data);
  }

  public signUp(data: UserSignUpType): Promise<AuthStateType> {
    return this.api.post<AuthStateType>('/auth/signup', data).then((res) => res.data);
  }

  public logOut(): Promise<AxiosResponse> {
    return this.api('/auth/logout');
  }

  public updateUser(id: OneUserType['id'], user: OneUserType): Promise<OneUserType> {
    return this.api.patch<OneUserType>(`/auth/${user.id}`, user).then((res) => res.data);
  }
}

export default new AuthService(axiosInstance);
