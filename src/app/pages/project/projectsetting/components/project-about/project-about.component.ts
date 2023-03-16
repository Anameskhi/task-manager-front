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

  mainProject?:IProject
  constructor(private projectFacadeSrv:ProjectFacadeService){}




  get project():IProject{
    return this.projectFacadeSrv.getProject()
  }



  ngOnInit(): void {

    this.mainProject = this.projectFacadeSrv.getProject()
    

  }
  

  
}
