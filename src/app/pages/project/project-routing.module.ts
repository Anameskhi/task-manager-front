import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectformComponent } from './projectform/projectform.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { AddEditComponent } from './add-edit/add-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectListComponent ,
  },
  {
    path: 'add',
    component: AddEditComponent
  },
  {
    path: 'edit/:id',
    component: AddEditComponent
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
