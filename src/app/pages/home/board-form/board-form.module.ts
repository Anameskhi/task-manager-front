import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BoardFormComponent } from './board-form.component';


@NgModule({
  declarations: [BoardFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ]
})
export class BoardFormModule { }
