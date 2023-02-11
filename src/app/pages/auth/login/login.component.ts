import { catchError, throwError } from 'rxjs';
import { AuthFacadeService } from './../auth-facade.service';
import { AuthService } from './../../../core/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  get getEmail(){
    return this.form.get('email')
  }
  get getPassword(){
    return this.form.get('password')
  }

  constructor(
    private authService: AuthService,
    private authFacadeService: AuthFacadeService,
    private router: Router
  ){}

  form: FormGroup = new FormGroup(
    { 
      email: new FormControl('',[
        Validators.required, 
        Validators.email]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10)
      ])
    })

    submit(){
      this.form.markAllAsTouched()
      if(this.form.invalid)return;
  
      this.authService.login(this.form.value)
      .pipe(
        catchError(({error}) => {
          this.authFacadeService.setErrors(error.message);
          return throwError(error)
        })
      )
      .subscribe({
        next: res=>{
        console.log(res)
        this.router.navigate(['/home'])
        }
        
      })}
}
