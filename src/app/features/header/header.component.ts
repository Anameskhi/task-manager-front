import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { tap } from 'rxjs';
import { IProject } from 'src/app/core/interfaces/project';
import { AuthService, ProjectService } from 'src/app/core/services';
import { ProjectFacadeService } from 'src/app/facades/project.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

projects$ = this.projectFacadeService.myProjects$
currentProject?: IProject = this.projectFacadeService.getProject()
countOfMyProjects!:number 

  constructor(
    private authService: AuthService,
    private toastService: NgToastService,
    private projectService: ProjectService,
    private projectFacadeService: ProjectFacadeService
  ) { }

  ngOnInit(): void {
   this.getMyProjects()
   this.getEachProject()
  }
  
 logout(){
this.toastService.success({detail: 'SUCCESS', summary: "You have Logged out Successfully"})
this.authService.signOut()
}

selectProject(projectId: number){
 console.log(projectId)
 this.projectFacadeService.setProject(projectId)
}

getMyProjects(){
this.projectFacadeService.getMyProjects().subscribe()
 
}
getEachProject(){
  this.projects$.subscribe(
    p=>this.countOfMyProjects= Object.keys(p).length 
  )
  
}

}
