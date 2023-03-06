import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends BaseService {


  getAllUsers(): Observable<User> {
    return this.get<User>('users/all');
  }
  createNewUsers(user:User):Observable<User>{
    return this.post<User>('users',user)
  }
}