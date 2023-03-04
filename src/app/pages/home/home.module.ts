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

import { IssueTypesComponent } from './issue-types/issue-types.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    HomeComponent,
    HomeStartComponent,
    

    HeaderComponent,

    ProjectSelectorDirective,

      IssueTypesComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatCheckboxModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
})
export class HomeModule {}
