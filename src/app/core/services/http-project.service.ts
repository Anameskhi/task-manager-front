import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class HttpProjectService extends BaseService {
  createProject(project: any): Observable<any> {
    console.log(project);
    return this.post<any>('project',project)
  }
}
