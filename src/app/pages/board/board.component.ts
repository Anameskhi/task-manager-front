import { ProjectService } from './../../core/services/project.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
   
  }

}
