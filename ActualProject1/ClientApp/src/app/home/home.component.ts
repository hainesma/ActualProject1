import { Component } from '@angular/core';

import { User } from 'oidc-client';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private loginService: LoginService) {
    //let user = authorizeService.getUser().subscribe((result): any => {
    //  console.log(result)
    //  this.currentUserId = result;
    //});
    //console.log(user);
    this.checkForLoggedIn()
  }

  isLoggedIn: boolean = false;
  currentUserId: any;
  checkForLoggedIn(): any {
    console.log(LoginService.currentUser)

    if (LoginService.currentUser != "") {
      this.isLoggedIn = true;
    }
    else if (LoginService.currentUser = "") {
      this.isLoggedIn = false
    }
  }
}



