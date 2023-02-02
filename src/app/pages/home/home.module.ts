import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../header/header.component';
import { HomeStartComponent } from './home-start/home-start.component';
import { ConstructinComponent } from './constructin/constructin.component';
import { SideBoardComponent } from './side-board/side-board.component';


@NgModule({
  declarations: [HomeComponent,HeaderComponent, HomeStartComponent, ConstructinComponent, SideBoardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    
  ],
})
export class HomeModule {}
