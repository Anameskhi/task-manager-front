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
  
   constructor(
    private cookieStorageService: CookieStorageService,
     http: HttpClient
   ){
     super(http)
   }

  login(payload: Login ):Observable<AuthResponse>{
    return this.post<AuthResponse>('auth/login',payload)
    .pipe(
      tap((response: AuthResponse)=>{
       const cookieExpire = new Date(Date.now() + 24)

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

  refreshToken(refresh: string): Observable<AuthResponse> {
    return this.post('auth/token', { refreshToken: refresh });
  }

  get token(): string {
    return this.cookieStorageService.getCookie('token');
  }

  get RefreshToken(): string {
    return this.cookieStorageService.getCookie('refreshToken');
  }
  

  setUser(user: User){
    localStorage.setItem('user', JSON.stringify(user))
  }

  get user(): User | null{
    const user = localStorage.getItem('user')
    return user? JSON.parse(user) : null
  }

  signOut() {
    localStorage.clear();
    this.cookieStorageService.deleteCookie('token');
    this.cookieStorageService.deleteCookie('refreshToken');
  }

}
