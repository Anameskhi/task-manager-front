import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssueTypesComponent } from '../../home/issue-types/issue-types.component';
import { ProjectAboutComponent } from './components/project-about/project-about.component';
import { ProjectBoardformComponent } from './components/project-boardform/project-boardform.component';
import { ProjectBoardsComponent } from './components/project-boards/project-boards.component';
import { ProjectEpicformComponent } from './components/project-epicform/project-epicform.component';
import { ProjectEpicsComponent } from './components/project-epics/project-epics.component';
import { ProjectIssuetypeformComponent } from './components/project-issuetypeform/project-issuetypeform.component';
import { ProjectIssuetypesComponent } from './components/project-issuetypes/project-issuetypes.component';
import { ProjectUserformComponent } from './components/project-userform/project-userform.component';
import { ProjectsettingComponent } from './projectsetting.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsettingComponent,
    children: [
      {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full'
      },
      {
        path: 'about',
        component: ProjectAboutComponent
      },
      {
        path: 'boards',
        children: [
          {
            path: '',
            component: ProjectBoardsComponent
          },
          {
            path: 'add',
            component: ProjectBoardformComponent
          },
          {
            path: 'edit/:id',
            component: ProjectBoardformComponent
          }
        ]
      },
      {
        path: 'issuetypes',
        children: [
          {
            path: '',
            component: ProjectIssuetypesComponent
          },
          {
            path: 'add',
            component: ProjectIssuetypeformComponent
          },
          {
            path: 'edit/:id',
            component: ProjectIssuetypeformComponent
          }
        ]
      },
      {
        path: 'epics',
        children: [
          {
            path: '',
            component: ProjectEpicsComponent
          },
          {
            path: 'add',
            component: ProjectEpicformComponent
          },
          {
            path: 'edit/:id',
            component: ProjectEpicformComponent
          }
        ]
      },
      {
        path: 'projectusers',
        component: ProjectUserformComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsettingRoutingModule { }
