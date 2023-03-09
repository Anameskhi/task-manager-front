import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import {FormsModule} from "@angular/forms";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        MatToolbarModule,
        MatIconModule,
        MatSelectModule
    ],
  exports: [
    MainLayoutComponent,
    HeaderComponent
  ]
})
export class MainLayoutModule { }
