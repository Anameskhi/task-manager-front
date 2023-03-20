import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/core/services';
import { BoardService } from 'src/app/core/services/board.service';
import { RoleService } from 'src/app/core/services/role.service';

@Component({
  selector: 'app-home-start',
  templateUrl: 'home-start.component.html',
  styleUrls: ['./home-start.component.scss'],
})
export class HomeStartComponent implements OnInit {
  projects: any;

  projectNameArray?: string[];
  myProjects: any;

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private boardService: BoardService,
    private roleService: RoleService
  ) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((res) => {
      this.projects = res;
      this.projects = this.projects.data;
      this.boardService.getboard().subscribe((res) => {
        console.log(res);
      });
      console.log('test');
    });
    this.projectService.getMyProjects().subscribe((res) => {
      console.log(res);
      this.myProjects = res;
    });
  }

  selectProject(project: any) {
    console.log(project);

    this.router.navigate(['/board', project.id]);
  }
}
