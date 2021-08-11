import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';
import { UserProfile } from '../user-profile/userProfile';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
/** Register component*/
export class RegisterComponent {
  /** Register ctor */

  loginService: LoginService;
    constructor(loginService:LoginService) {
      this.loginService = loginService;
  }


    register(form: NgForm) {
      let email = form.form.value.email;
      let password = form.form.value.password;
      let firstName = form.form.value.firstName;

      let birthDate = form.form.value.birthDate;
      let mantra = form.form.value.mantra;
      let foodRegimenFk = parseInt(form.form.value.foodRegimenFk);
      let philosophySchoolFk = parseInt(form.form.value.philosophySchoolFk);

      this.loginService.register(email,password,firstName, birthDate,mantra,foodRegimenFk,philosophySchoolFk)
    }




}
