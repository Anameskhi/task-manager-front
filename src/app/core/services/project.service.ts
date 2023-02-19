import { IProject } from './../interfaces/project';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService extends BaseService {

  getProjects(): Observable<IProject[]>{
    return this.get<IProject[]>('project')
  }

}
