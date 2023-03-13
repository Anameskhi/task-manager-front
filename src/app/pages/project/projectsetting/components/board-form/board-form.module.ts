import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ReactiveFormsModule } from '@angular/forms';

import { BoardFormComponent } from './board-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [BoardFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    
   MatFormFieldModule
  ]
})
export class BoardFormModule { }
