import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProject } from 'src/app/core/interfaces/project';
import { ProjectService } from 'src/app/core/services';
import { ProjectFacadeService } from 'src/app/facades/project.service';

@Component({
  selector: 'app-project-about',
  templateUrl: './project-about.component.html',
  styleUrls: ['./project-about.component.scss']
})
export class ProjectAboutComponent implements OnInit {

  project?:IProject;


  constructor(private projectSrv:ProjectFacadeService){}

  ngOnInit(): void {
    this.project = this.projectSrv.getProject()
    console.log(this.project) 
  }
  

  
}
