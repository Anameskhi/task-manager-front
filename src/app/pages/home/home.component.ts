import { ProjectService } from './../../core/services/project.service';
import { AuthService } from './../../core/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  
  showCreateBoard: boolean = true;
  Projects: any;
  
  constructor(private projectService: ProjectService) {
    
  }

  ngOnInit(): void {
    console.log(this.showCreateBoard);
    this.getAllProject()
  }

  getAllProject(){
    this.projectService.getProjects().subscribe((res) => {
      this.Projects = res;
  
  })}
}
