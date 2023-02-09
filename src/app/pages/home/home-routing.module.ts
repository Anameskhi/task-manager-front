import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardFormComponent } from './board-form/board-form.component';
import { ConstructinComponent } from './constructin/constructin.component';
import { HomeStartComponent } from './home-start/home-start.component';
import { HomeComponent } from './home.component';

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
        path: 'boardForm',
        loadChildren: () =>
          import('./board-form/board-form.module').then(
            (m) => m.BoardFormModule
          ),
        component: BoardFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
