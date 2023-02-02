import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './pages/board/board.component';


const routes: Routes = [
  {
<<<<<<< HEAD
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
=======
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
>>>>>>> a0dbe270cd06723615378e59cc7f5dec2fb894e0
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
