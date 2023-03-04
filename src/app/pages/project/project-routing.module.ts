import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectformComponent } from './projectform/projectform.component';
import { ProjectListComponent } from './project-list/project-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectListComponent ,
  },
  {
    path: 'add',
    component: ProjectformComponent
  },
  {
    path: 'edit/:id',
    component: ProjectformComponent
  },
  {
    path: 'setting',
    loadChildren: () => import('./projectsetting/projectsetting.module').then(m => m.ProjectsettingModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
