import { IProject } from './../interfaces/project';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { Injectable } from '@angular/core';

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
  getProjects(): Observable<IProject[]> {
    return this.get<IProject[]>('project');
  }

  getMyProjects(): Observable<IProject[]> {
    return this.get<IProject[]>('project/my');
  }

  getProjectId(id: number): Observable<any> {
    return this.get<any>(`project/${id}`);
  }

  //set and get project form local storage
  setLocal(project: IProject) {
    const jsonProject = JSON.stringify(project);

    return localStorage.setItem('project', jsonProject);
  }

  getLocalProject() {
    const project: any = localStorage.getItem('project');
    return JSON.parse(project);
  }
}
