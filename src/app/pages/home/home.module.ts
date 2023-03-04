import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { HomeStartComponent } from './home-start/home-start.component';
import { UsersComponent } from './users/users.component';

import { HeaderComponent } from '../header/header.component';
import { ProjectSelectorDirective } from 'src/app/shared/project-selector.directive';

@NgModule({
  declarations: [
    HomeComponent,
    HomeStartComponent,
    

    HeaderComponent,
    ProjectSelectorDirective,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
  ],
})
export class HomeModule {}
