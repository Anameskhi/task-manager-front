import { CookieStorageService } from './../../core/services/cookie.service';
import { AuthService } from './../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private cookieStorageService: CookieStorageService
  ) { }

  ngOnInit(): void {
  }
  
 logout(){
this.authService.signOut()
}
}
