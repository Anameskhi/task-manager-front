import { ProjectService } from './../../core/services/project.service';
import { Component, OnInit, Inject } from '@angular/core';
import { CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { AddTaskComponent } from './modals/add-task/add-task.component';
import { BoardService } from 'src/app/core/services/board.service';
import { takeUntil } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


// import { Board } from 'src/app/models/board.model';
// import { Column } from 'src/app/models/column.model';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  allBoard:any
  board:any
  constructor(
    private projectService: ProjectService,private boardService:BoardService,private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.boardService.getboard().subscribe(res=>{
      console.log(res);
      this.allBoard=res;
      this.boardService.getboard()
      .subscribe(boards => {
        console.log(boards);
      });
     
    })
  }

  showBoard(project:any){
    const id = project.id;
   
    this.boardService.getTarBoard(id).subscribe(res=>{
      
      this.board=res;
      this.board= JSON.stringify(this.board)
     
      
    })
  }


}
