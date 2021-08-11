import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { getBaseUrl } from '../../main';
import { UserProfile } from './userProfile';
import { UserProfileService } from '../userProfile.service';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})
/** UserProfile component*/
export class UserProfileComponent {
    /** UserProfile ctor */
    constructor(private userProfileService: UserProfileService,) {
      //this.authorize.getUser().subscribe((result): any => {
      //  console.log(result)
      //  this.currentUserId = result;
      //})
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
      password:password,
      birthDate: birthDate,
      mantra: mantra,
      foodRegimenFk: foodRegimenFk, philosophySchoolFk: philosophySchoolFk,

    }
    console.log(profile);
    this.userProfileService.postUserProfile(profile)
    
  }
}
