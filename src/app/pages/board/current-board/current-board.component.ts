import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { Column, IBoard } from 'src/app/core/interfaces/board';
import { ITask } from 'src/app/core/interfaces/task';
import { AddTaskService } from 'src/app/core/services/add-task.service';
import { BoardService } from 'src/app/core/services/board.service';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-current-board',
  templateUrl: './current-board.component.html',
  styleUrls: ['./current-board.component.scss']
})
export class CurrentBoardComponent implements OnInit {
  boardId!: number;
  board: IBoard = {} as IBoard;
  tasks: any = {
    51:[
      {title: 'Task 1', 
      description: 'Description 1'},
      {title: 'Task 2', 
      description: 'Description 2'},
    ],
    52:[
      {title: 'Task 3',
      description: 'Description 3'},
    ]
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private boardService: BoardService,
    private dialog: MatDialog,
    private taskService: AddTaskService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.boardId = +params['id']
        this.getBoard()
      }
    })
  }
  getBoard() {
    this.boardService.getTarBoard(this.boardId).subscribe(board => {
      console.log(board)
      this.board = board
      this.getTasks()
    })
  }
  addTask(column: Column) { 
    const dialogRef = this.dialog.open(AddTaskComponent, {
      width: '900px',
      data: { 
        boardId: this.boardId,
        column: column
           }
    });
      dialogRef.afterClosed().subscribe((task: ITask) => {
      if (task) {
        this.getTasks()
      }
    })
  }

  private getTasks() {
    this.taskService.getTasks({boardId: this.boardId}).subscribe(tasks => {
      this.tasks = _.groupBy(tasks, 'boardColumnId')
    })
  }

  drop(event: CdkDragDrop<any>, column: Column) {
    console.log(event)
    console.log(column)

    
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      const tasks: ITask[] = event.container.data.map((task: ITask, index: number) => {
        return {
          ...task,
          taskStatus: column.taskStatus,
          boardColumnId: column.id,
        }
      })
      this.tasks[column.id] = tasks
      const currentTask = tasks[event.currentIndex]
      console.log(currentTask)
      this.taskService.updateTask(currentTask.id, currentTask).subscribe(task => {

        console.log(task)
        this.getTasks()
      })
    }

    
  }
  viewTask(task: ITask, column: Column) { 
    const dialogRef = this.dialog.open(AddTaskComponent, {
      width: '900px',
      data: { 
        boardId: this.boardId,
        column: column,
        taskId: task.id
           }
    });
    dialogRef.afterClosed().subscribe((task: ITask) => {
      if (task) {
        this.getTasks()
      }
    })
  }



}
