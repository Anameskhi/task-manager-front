import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProject } from '../interfaces/project';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class HttpProjectService extends BaseService {
  createProject(project: IProject): Observable<IProject> {
    console.log(project);
    return this.post<IProject>('project',project)
  }
}
