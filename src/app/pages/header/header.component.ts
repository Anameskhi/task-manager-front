import { NgToastService } from 'ng-angular-popup';
import { CookieStorageService } from './../../core/services/cookie.service';
import { AuthService } from './../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  firstName?: string
  constructor(
    private authService: AuthService,
    private toastService: NgToastService,
    private cookieStorageService: CookieStorageService
  ) { }

  ngOnInit(): void {
    let name = this.authService.getUser()?.firstName
    this.firstName = name![0].toUpperCase() + name!.substr(1).toLowerCase()
  }
  
 logout(){
this.toastService.success({detail: 'SUCCESS', summary: "You have Logged out Successfully"})
this.authService.signOut()


}


}
