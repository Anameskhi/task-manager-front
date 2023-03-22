import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class RoleService extends BaseService {
  getUserRole() {
    return this.get<any>('role/my');
  }
}
