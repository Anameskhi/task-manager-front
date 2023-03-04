import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { AuthService, CookieStorageService } from 'src/app/core/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private toastService: NgToastService,
    private cookieStorageService: CookieStorageService
  ) { }

  ngOnInit(): void {
    
   
  }
  
 logout(){
this.toastService.success({detail: 'SUCCESS', summary: "You have Logged out Successfully"})
this.authService.signOut()


}
}
