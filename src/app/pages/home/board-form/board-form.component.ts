import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { HttpBoardService } from 'src/app/core/services/http-board.service';

import { BoardFormService } from 'src/app/core/services/board-form.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './board-form.component.html',
  styleUrls: ['./board-form.component.scss'],
})
export class BoardFormComponent implements OnInit {
  boardForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private httpBoard: HttpBoardService,
    private boardFormSrv: BoardFormService
  ) {}

  backgroundColor: string[] = [];
  backgroundImg: string[] = [];
  color = '';
  background =
    'https://plus.unsplash.com/premium_photo-1674752365557-166d7edc8081?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80';

  ngOnInit(): void {
    this.boardForm = this.fb.group({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      position: new FormControl(0),
      columns: this.fb.array([]),
    });
  }
  get columnArr() {
    return this.boardForm.controls['columns'] as FormArray;
  }

  addColumn() {
    this.columnArr.push(
      new FormGroup({
        name: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        position: new FormControl(
          this.columnArr.length + 1,
          Validators.required
        ),
        taskStatus: new FormControl('', Validators.required),
      })
    );
  }

  onSubmit() {
    console.log(this.boardForm.value);

    this.httpBoard
      .addBoard(this.boardForm.value)
      .subscribe((res) => console.log(res));
  }
}
