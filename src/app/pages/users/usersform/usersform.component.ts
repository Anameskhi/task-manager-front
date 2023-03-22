import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-usersform',
  templateUrl: './usersform.component.html',
  styleUrls: ['./usersform.component.scss']
})
export class UsersformComponent {
  form: FormGroup = new FormGroup({
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    mobileNumber: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    identityNumber: new FormControl(null),
  });
  constructor(
    public dialogRef: MatDialogRef<any>,
    private userService: UsersService
  ) {}

  onSubmit() {
    this.form.markAllAsTouched()
    if(this.form.invalid){
      return
    }

    this.userService.createNewUsers(this.form.value)
    .subscribe((res) => {
      this.dialogRef.close(res)
    });
  }
}
