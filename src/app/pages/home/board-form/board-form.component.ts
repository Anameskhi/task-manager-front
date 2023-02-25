import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router, RouterLink } from '@angular/router';
import { BoardFormService } from 'src/app/core/services/board-form.service';

@Component({
  selector: 'app-board-form',
  templateUrl: './board-form.component.html',
  styleUrls: ['./board-form.component.scss'],
})
export class BoardFormComponent implements OnInit {
  backgroundColor: string[] = [];
  backgroundImg: string[] = [];
  color = '';
  background =
    'https://plus.unsplash.com/premium_photo-1674752365557-166d7edc8081?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80';
  constructor(
    private boardFormSrv: BoardFormService,
    private router: Router) {}
  ngOnInit(): void {
    this.backgroundColor = this.boardFormSrv.boardColors;
    this.backgroundImg = this.boardFormSrv.boardImages;
  }

  onColor(colors: string) {
    this.color = colors;
    this.background = colors;
  }
  onSubmit(form: NgForm) {
    console.log(form);
    this.router.navigate(['/board'])
    
  }
}
