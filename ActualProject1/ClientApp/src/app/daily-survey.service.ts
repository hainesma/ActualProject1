import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DailySurveys } from './daily-surveys/dailysurveys';


@Injectable({
  providedIn: 'root'
})

export class DailySurveyService {

  constructor(private http: HttpClient) {

  }

  controller: string = '';
  baseURL: string = 'https://localhost:44314/api/${this.controller}'

  //---API calls---

  getSurvey(): any {
    this.controller = 'DailySurveys'
    return this.http.get<DailySurveys>(this.baseURL);
  }
}
