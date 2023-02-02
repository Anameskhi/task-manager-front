import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-start',
  template: `<p>You can visit the boards page to see the Trello-clone functionality.</p>`,
  styles: ['p { margin:20px; font-size:1.2rem}']
})
export class HomeStartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
