import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  title = 'angular-material-tab-router';  
  navLinks: any[];
  activeLinkIndex = -1; 
  constructor(private router: Router) {
    this.navLinks = [
        {
            label: 'Login',
            link: './login',
            index: 0
        }, {
            label: 'Register',
            link: './register',
            index: 1
        }
    ];
}
ngOnInit(): void {
  this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
}

}
