import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthFacadeService {

  errors: Subject<any> = new Subject<string>();
  error$ = this.errors.asObservable()

  setErrors(error : string){
  
      this.errors.next(error)

   
  }

  destroy(){
    this.errors.next(null)
  }


}
