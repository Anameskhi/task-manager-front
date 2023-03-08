import { IProject } from './../interfaces/project';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { Injectable } from '@angular/core';
import { PaginationResponse } from '../interfaces/pagination-response';

@Injectable({
  providedIn: 'root',
})
export class ProjectService extends BaseService {
  //create project
  createProject(project: IProject): Observable<IProject> {
    console.log(project);
    return this.post<IProject>('project', project);
  }

  //get project http calls
  getProjects(): Observable<PaginationResponse<IProject>> {
    return this.get<PaginationResponse<IProject>>('project');
  }

  getMyProjects(): Observable<IProject[]> {
    return this.get<IProject[]>('project/my');
  }

  getProjectId(id: number): Observable<IProject> {
    return this.get<IProject>(`project/${id}`);
  }
  getAllProjects(): Observable<IProject[]> {
    return this.get<IProject[]>('project/All');
  }

  //set and get project form local storage
  setLocal(project: IProject) {
    const jsonProject = JSON.stringify(project);

    return localStorage.setItem('project', jsonProject);
  }

  getLocalProject(): IProject {
    const project: any = localStorage.getItem('project');
    return JSON.parse(project);
  }


}
