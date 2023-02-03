import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  apiUrl = environment.apiUrl

  constructor(
    private http: HttpClient
  ) { }

  post<T>(url: string, body: any ): Observable<T>{
    return this.http.post<T>(this.apiUrl + url, body)
  }
}
