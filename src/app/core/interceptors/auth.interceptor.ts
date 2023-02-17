import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
  
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private toastService: NgToastService,
    private router: Router
  ) {}



  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const accessToken = this.authService.getToken()

    if(accessToken){
      request = request.clone({
        setHeaders: {Authorization: `Bearer ${accessToken}`}
      })

    }else{
      console.log(typeof(accessToken))

    }
    return next.handle(request)
    // .pipe(
    //   catchError((err: HttpErrorResponse)=>{
    //     if(err instanceof HttpErrorResponse){
    //       if(err.status === 401){
    //         this.toastService.warning({detail: "Warning", summary: "Token is expired, Login again"})
    //         this.router.navigate(['/auth/login'])
    //       }
    //     }
    //    return throwError(()=> new Error('some other error occured'))
    //   })
    // )
  }
}
