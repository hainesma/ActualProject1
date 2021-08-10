import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Lift } from './lift/lift';

@Injectable({
  providedIn: 'root'
})
export class LiftService {
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

  }
  callLiftRandom(@Inject('BASE_URL') baseUrl: string): any {
    /*This method returns an observable from the LiftController from the ASP.net side of the program. This will need to be subscribed before it becoems a useful piece of info*/
    let response = this.http.get<Lift>(baseUrl+'api/Lift/')
    return response;
  }
}
