import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstructinComponent } from './constructin/constructin.component';
import { HomeStartComponent } from './home-start/home-start.component';
import { HomeComponent } from './home.component';
import { SideBoardComponent } from './side-board/side-board.component';

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
        path:'contruction',
        component:ConstructinComponent
      },
      {
        path:'createboard',
        component:SideBoardComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
