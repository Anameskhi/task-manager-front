import { AuthInterceptor } from './../interceptors/auth.interceptor';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { HttpClient } from '@angular/common/http';
import { CookieStorageService } from './cookie.service';
import { User } from './../interfaces/user';
import { Observable, tap } from 'rxjs';
import { Login, Register, AuthResponse } from './../interfaces/auth';
import { BaseService } from './base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  errorMessage?: string

   constructor(
    private cookieStorageService: CookieStorageService,
    private toast: NgToastService,
    private router: Router,
     http: HttpClient
   ){
     super(http)
   }

  login(payload: Login ):Observable<AuthResponse>{
    return this.post<AuthResponse>('auth/login',payload)
    .pipe(
      tap((response: AuthResponse)=>{
       const cookieExpire = new Date(Date.now() + 24 * 60 * 60 * 1000)

        this.cookieStorageService.setCookie(
          'token',
          response.token.accessToken,
          cookieExpire
        );

        this.cookieStorageService.setCookie(
          'refreshToken',
          response.token.refreshToken
        );

        this.setUser(response.user)
      })
    )
  }

  register(payload: Register ):Observable<AuthResponse>{
    return this.post<AuthResponse>('auth/signup',payload)
  }

  refreshToken(refreshToken: string): Observable<AuthResponse> {
    return this.post<AuthResponse>('auth/token', { refreshToken: refreshToken });
  }

  getToken() {
    return this.cookieStorageService.getCookie('token')

  }

  getRefreshTok(): string {
    return this.cookieStorageService.getCookie('refreshToken');
  }
  

  setUser(user: User){
    localStorage.setItem('user', JSON.stringify(user))
  }

  getUser(): User | null{
    const user = localStorage.getItem('user')
    return user? JSON.parse(user) : null
  }

  signOut() {
    localStorage.clear();
    this.cookieStorageService.deleteCookie('token');
    this.cookieStorageService.deleteCookie('refreshToken');
  }

  getError(error: string){
    this.errorMessage = error
    console.log(this.errorMessage)
  }
  

}
