import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpClient
  
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private toastService: NgToastService,
    private router: Router,
    private http: HttpClient
  ) {}



  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const accessToken = this.authService.getToken()

    if(accessToken){
      request = request.clone({
        setHeaders: {Authorization: `Bearer ${accessToken}`}
      })

    }
    return next.handle(request)
    .pipe(
      catchError((err: HttpErrorResponse) =>{
        if(err.status === 401){

        }

        return throwError(()=> new Error('some other error occured'))


      }))
      
      // catchError((err: HttpErrorResponse)=>{
      //   if(err instanceof HttpErrorResponse){
      //     if(err.status === 401){
      //       this.toastService.warning({detail: "Warning", summary: "Token is expired, Login again"})
      //       this.router.navigate(['/auth/login'])
      //     }
      //   }
      //  return throwError(()=> new Error('some other error occured'))
      // })
    
  }
}
