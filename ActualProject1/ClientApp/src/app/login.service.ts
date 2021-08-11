import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getBaseUrl } from '../main';
import { UserProfileData } from './register/userProfileData';

import { UserProfile } from './user-profile/userProfile';




@Injectable({
  providedIn: 'root'
})


export class LoginService {
  http: HttpClient
  constructor(http: HttpClient) {

    this.http = http;
  }

  baseUrl = getBaseUrl();
  register(email: string, password: string, firstName: string, birthDate: Date,mantra:string,foodRegimenFk:number,philosophySchoolFk:number) {

    let profileData: UserProfileData = { firstName: firstName, birthDate: birthDate, mantra: mantra, foodRegimenFk: foodRegimenFk, philosophySchoolFk: philosophySchoolFk }
    this.http.post<any>(this.baseUrl + 'api/Login/Register/email=' + email + '&pw=' + password + '&fname=' + firstName+ '&date=' + birthDate + '&mantra=' + mantra + '&food=' + foodRegimenFk + '&philo=' + philosophySchoolFk, {}).subscribe(

      result => console.log(result)

      
          )
  }

  login(email: string, password: string)
  {

  }

}
