import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserProfile } from "./user-profile/userProfile";


@Injectable({
  providedIn: 'root'
})

export class UserProfileService {
  profile: UserProfile;
  userProfileUrl: string;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.userProfileUrl = baseUrl + 'api/UserProfiles'
  }

  getUserProfiles(@Inject('BASE_URL') baseUrl: string): any {
    return this.http.get<UserProfile[]>(baseUrl + 'api/UserProfiles')
  }

  

  postUserProfile(profile: UserProfile): Observable<UserProfile> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    console.log(profile);
    return this.http.post<UserProfile>(this.userProfileUrl, profile, { headers: headers })
  }
}


