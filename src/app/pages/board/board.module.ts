import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AddTaskComponent } from './modals/add-task/add-task.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    BoardComponent,
    AddTaskComponent,
    ListComponent,
    CardComponent
  ],
  entryComponents: [
    AddTaskComponent
  ]
  ,
  imports: [
    CommonModule,
    BoardRoutingModule,
    MatToolbarModule,
    DragDropModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,

  ],
  exports: [
    BoardComponent
  ]
})
export class BoardModule { }