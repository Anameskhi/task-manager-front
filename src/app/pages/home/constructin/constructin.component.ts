import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/core/services';

@Component({
  selector: 'app-constructin',
  templateUrl: './constructin.component.html',
  styleUrls: ['./constructin.component.scss']
})
export class ConstructinComponent implements OnInit {
  projects:any
  constructor() { }

  ngOnInit(): void {
   
  }

}
