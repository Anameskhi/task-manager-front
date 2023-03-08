import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { IProject } from 'src/app/core/interfaces/project';
import { AuthService, CookieStorageService, ProjectService } from 'src/app/core/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
projects:any
  constructor(
    private authService: AuthService,
    private toastService: NgToastService,
    private projectService: ProjectService,
    private cookieStorageService: CookieStorageService
  ) { }

  ngOnInit(): void {
    this.getAllProject()
   
  }
  
 logout(){
this.toastService.success({detail: 'SUCCESS', summary: "You have Logged out Successfully"})
this.authService.signOut()
}

getAllProject(){
  this.projectService.getProjects().subscribe((res) => {
    this.projects = res;
    console.log(res)

})}
}
