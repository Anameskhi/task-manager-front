import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './pages/board/board.component';


const routes: Routes = [
  {

    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },{

  
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)

  },
  {
    path: '',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'board',
    component:BoardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
