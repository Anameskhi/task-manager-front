import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { RolesListComponent } from './roles-list/roles-list.component';
import { RolesformComponent } from './rolesform/rolesform.component';
import { PermissionformComponent } from './permissionform/permissionform.component';


@NgModule({
  declarations: [
    RolesListComponent,
    RolesformComponent,
    PermissionformComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule
  ]
})
export class RolesModule { }
