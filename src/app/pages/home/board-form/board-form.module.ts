import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardFormComponent } from './board-form.component';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [BoardFormComponent],
  imports: [CommonModule, FormsModule, MatMenuModule],
})
export class BoardFormModule {}
