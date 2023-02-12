import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { BoardComponent } from '../../board.component';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  inputValue?: string;
  constructor(
    public dialogRef: MatDialogRef<BoardComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
  ) {console.log(data.todos)}
  
  onNoClick(): void {
    this.dialogRef.close();
  }
  onClick(): void {
  this.data.todos.push(this.inputValue);
  this.dialogRef.close()
  }
}
  