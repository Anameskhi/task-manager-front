import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    BoardComponent
  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    MatToolbarModule,
    DragDropModule,
  ]
})
export class BoardModule { }