import { Component } from '@angular/core';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  lists: ListComponent[] = [];

  addList() {
    var newList = new ListComponent();
    this.lists.push(newList);
  }
}
