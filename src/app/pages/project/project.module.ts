import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectformComponent } from './projectform/projectform.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectsettingComponent } from './projectsetting/projectsetting.component';



@NgModule({
  declarations: [
    ProjectformComponent,
    ProjectListComponent,
    ProjectsettingComponent
    
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
