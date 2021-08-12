/// <reference path="lift/lift.ts" />
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getBaseUrl } from '../main';
import { UserProfileData } from './register/userProfileData';

import { UserProfile } from './user-profile/userProfile';




@Injectable({
  providedIn: 'root'
})


export class LoginService {
  http: HttpClient
  constructor(http: HttpClient, private route:Router) {

    this.http = http;
  }
  static currentUser: string = "";
   currentUserProfile: UserProfileData;
  baseUrl = getBaseUrl();
  register(email: string, password: string, firstName: string, birthDate: Date, mantra: string, foodRegimenFk:number,philosophySchoolFk:number) {
    
    let profileData: UserProfileData = { firstName: firstName, birthDate: birthDate, mantra: mantra, foodRegimenFk: foodRegimenFk, philosophySchoolFk: philosophySchoolFk }
    console.log(profileData)
    this.http.post<any>(this.baseUrl + 'api/Login/Register/email=' + email + '&pw=' + password + '&fname=' + firstName + '&date=' + birthDate + '&mantra=' + mantra + '&food=' + foodRegimenFk + '&philo=' + philosophySchoolFk, {}).subscribe(

      result => console.log(result)

      
          )
  }

  login(email: string, password: string)
  {
    this.http.get<any>(this.baseUrl + 'api/Login/Login/email=' + email + '&pw=' + password).subscribe(result => {

      console.log(result)
      if (result === true) {
        LoginService.currentUser = email;
        this.currentUserProfile = this.getProfileDetails(LoginService.currentUser);
      }
      console.log(LoginService.currentUser)
      this.route.navigateByUrl('');

    })
    
  }

  getProfileDetails(email: string):any
  {

  return this.http.get<any>(this.baseUrl + 'api/Login/details/email=' + email)
  }

}
