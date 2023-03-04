import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsettingRoutingModule } from './projectsetting-routing.module';
import { ProjectsettingComponent } from './projectsetting.component';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [
    ProjectsettingComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    ProjectsettingRoutingModule
  ]
})
export class ProjectsettingModule { }
