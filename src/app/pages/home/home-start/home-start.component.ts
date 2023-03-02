import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/core/services';

@Component({
  selector: 'app-home-start',
  template: `<div *ngFor="let project of projects.data">
  {{project.abbreviation}}
</div>
  <p>You can visit the boards page to see the Trello-clone functionality.</p>`,
  styles: ['p { margin:20px; font-size:1.2rem}']
})
export class HomeStartComponent implements OnInit {
  projects:any
  constructor(private projectService:ProjectService) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((res) => {
      this.projects = res;
      console.log(this.projects);
    });
  }

}
