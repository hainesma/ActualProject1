import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';
import { UserProfile } from '../user-profile/userProfile';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
/** Login component*/
export class LoginComponent {
  /** Login ctor */
  
  constructor(private loginService: LoginService, http: HttpClient) {
    this.loginService = loginService;
  }

  

  login(form: NgForm)
  {
    let email = form.form.value.email;
    let password = form.form.value.password;

    this.loginService.login(email, password);
  }
}
