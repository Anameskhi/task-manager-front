import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ConstructinComponent } from './constructin/constructin.component';
import { HomeStartComponent } from './home-start/home-start.component';
import { HomeComponent } from './home.component';
import { BoardFormComponent } from './board-form/board-form.component';
import { IssueTypesComponent } from './issue-types/issue-types.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: HomeStartComponent,
      },
      {
        path: 'contruction',
        component: ConstructinComponent,
      },
      

      {
        path: 'ProjectForm',
        loadChildren: () =>
          import('./project-form/project-form.module').then(
            (m) => m.ProjectFormModule
          ),
        component: ProjectFormComponent,
      },
      {
        path: 'BoardForm/:id',
        loadChildren: () =>
          import('./board-form/board-form.module').then(
            (m) => m.BoardFormModule
          ),
        component: BoardFormComponent,
      },
      {
        path: 'issueTypesForm/:id',
        component: IssueTypesComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
