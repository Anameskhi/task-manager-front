import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsettingRoutingModule } from './projectsetting-routing.module';
import { ProjectsettingComponent } from './projectsetting.component';
import { ProjectAboutComponent } from './components/project-about/project-about.component';
import { ProjectBoardsComponent } from './components/project-boards/project-boards.component';
import { ProjectBoardformComponent } from './components/project-boardform/project-boardform.component';
import { ProjectIssuetypesComponent } from './components/project-issuetypes/project-issuetypes.component';
import { ProjectIssuetypeformComponent } from './components/project-issuetypeform/project-issuetypeform.component';
import { ProjectEpicsComponent } from './components/project-epics/project-epics.component';
import { ProjectEpicformComponent } from './components/project-epicform/project-epicform.component';
import { ProjectUserformComponent } from './components/project-userform/project-userform.component';



@NgModule({
  declarations: [
    ProjectAboutComponent,
    ProjectBoardsComponent,
    ProjectBoardformComponent,
    ProjectIssuetypesComponent,
    ProjectIssuetypeformComponent,
    ProjectEpicsComponent,
    ProjectEpicformComponent,
    ProjectUserformComponent
  ],
  imports: [
    CommonModule,
    ProjectsettingRoutingModule,
    
  ]
})
export class ProjectsettingModule { }
