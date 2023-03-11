import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces';
import { BaseService } from './base.service';
import { PaginationResponse } from '../interfaces/pagination-response';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends BaseService {


  
  createNewUsers(user:IUser):Observable<IUser>{
    return this.post<IUser>('users',user)
  }

  getUsers():Observable<PaginationResponse<IUser>>{
    return this.get<PaginationResponse<IUser>>('users')

  }
  getAllUsers(): Observable<IUser> {
    return this.get<IUser>('users/all');
  }

  getUser(id: number):Observable<IUser>{
    return this.get<IUser>(`users/${id}`)
  }

  updateUser(id: number, user: IUser):Observable<IUser>{
    return this.put<IUser>(`users/${id}`, user)
  }

  deleteUser(id: string):Observable<IUser>{
    return this.delete<IUser>(`users/${id}`)
  }
}
