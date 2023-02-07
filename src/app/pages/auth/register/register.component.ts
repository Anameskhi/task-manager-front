import { Router } from '@angular/router';
import { AuthService } from './../../../core/services/auth.service';
import { PasswordValidate } from './../../../core/validators/password.validator';



import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  errorMessage?: string
  get getFirstName(){
    return this.form.get('firstName')
  }
  get getLastName(){
    return this.form.get('lastName')
  }
  get getEmail(){
    return this.form.get('email')
  }
  get getPassword(){
    return this.form.get('password')
  }
  get getConfirmPassword(){
    return this.form.get('confirmPassword') ;
  }

  form: FormGroup = new FormGroup(
    { 
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required),
      email: new FormControl('',[
        Validators.required, 
        Validators.email]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10)
      ]),
      confirmPassword: new FormControl('', Validators.required),
    },{validators: PasswordValidate.passwordMatch});
    
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submit(){
    this.form.markAllAsTouched()
    if(this.form.invalid)return;
      this.authService.register(this.form.value)
      .subscribe({
        next: res=>{
          if(res){
        this.router.navigate(['/auth/login'])
          }
        },
        error: ({error}) => {
         
          console.log(error.message)}
        }
      )
    }
  }



