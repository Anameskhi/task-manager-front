import { Injectable } from '@angular/core';
import { IProject } from '../core/interfaces/project';
import { ProjectService } from '../core/services';

@Injectable({
  providedIn: 'root'
})
export class ProjectFacadeService {

  constructor(
    private projectService: ProjectService
  ) { }

  setProject(projectId: number){
    this.projectService.getProjectId(projectId).subscribe(
      (project)=>{
        localStorage.setItem('project',JSON.stringify(project))
      }
    )
    
  }

  getProject(): IProject{
    const project = localStorage.getItem('project');
   return project? JSON.parse('project') : null
  }
}
