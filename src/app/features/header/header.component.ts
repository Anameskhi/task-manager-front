import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { Observable } from 'rxjs';
import { IProject } from 'src/app/core/interfaces/project';
import { AuthService, CookieStorageService, ProjectService } from 'src/app/core/services';
import { ProjectFacadeService } from 'src/app/facades/project.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

projects$ = this.projectFacadeService.myProjects$
currentProject?: IProject = this.projectFacadeService.getProject()

  constructor(
    private authService: AuthService,
    private toastService: NgToastService,
    private projectService: ProjectService,
    private projectFacadeService: ProjectFacadeService
  ) { }

  ngOnInit(): void {
   this.getMyProjects()
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
  this.projectFacadeService.getMyProjects()
}

}
