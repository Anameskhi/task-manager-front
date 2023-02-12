import { Component, OnInit, Inject } from '@angular/core';
import { CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { AddTaskComponent } from './modals/add-task/add-task.component';


// import { Board } from 'src/app/models/board.model';
// import { Column } from 'src/app/models/column.model';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  

  ngOnInit() {
  }


}
