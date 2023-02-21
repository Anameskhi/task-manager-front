import { ProjectService } from './../../core/services/project.service';
import { AuthService } from './../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showCreateBoard:boolean=true;


  constructor(
    private projectService: ProjectService

  ) { }

  ngOnInit(): void {
    console.log(this.showCreateBoard);
   this.projectService.getProjects().subscribe(res=>{
     console.log(res)
   })
  }
  
}
