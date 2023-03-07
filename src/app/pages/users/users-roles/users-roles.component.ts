import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-users-roles',
  templateUrl: './users-roles.component.html',
  styleUrls: ['./users-roles.component.scss']
})
export class UsersRolesComponent {
  select=''
  form:FormGroup =  new FormGroup({
    roles:new FormControl('select',Validators.required)
  })

  constructor(
  public dialogRef: MatDialogRef<any>,
  ){}
  

  onSubmit(){
    console.log(this.form);
  }
}
