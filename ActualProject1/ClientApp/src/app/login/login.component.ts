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
  constructor(private loginService: LoginService, http:HttpClient) {

  }


  postUserProfile(form: NgForm) {

    let email = form.form.value.email;
    let firstName = form.form.value.firstName;
    //This will need to implement the hasher for security though it might be done during the login I'm not sure
    let password = form.form.value.password;
    let birthDate = form.form.value.birthDate;
    let mantra = form.form.value.mantra;
    let foodRegimenFk = parseInt(form.form.value.foodRegimenFk);
    let philosophySchoolFk = parseInt(form.form.value.philosophySchoolFk);

    let profile: UserProfile = {
      id: 0,
      email: email,
      firstName: firstName,
      password: password,
      birthDate: birthDate,
      mantra: mantra,
      foodRegimenFk: foodRegimenFk, philosophySchoolFk: philosophySchoolFk,

    }


  }

  login(form: NgForm)
  {
    let email = form.form.value.email;
    let password = form.form.value.password;

  }
}
