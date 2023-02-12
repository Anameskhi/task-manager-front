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
  todo?:any = [];

  done?:any= [];
  animal?: string;
  
  // constructor(public dialog: MatDialog) {console.log(this.todo); }
  // openDialog(): void {
    
  //   const dialogRef = this.dialog.open(AddTaskComponent, 
  //     {
  //     data: {todos: this.todo, dones: this.done},
  //     }
    
  //   );
        
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed' + result);
      
  //   });
  // }

  ngOnInit() {
  }

  // drop(event: CdkDragDrop<string[]>) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex);
  //   }
  // }
}
