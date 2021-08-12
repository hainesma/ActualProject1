import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { DailySurveys } from './daily-surveys/dailysurveys';


@Injectable({
  providedIn: 'root'
})

export class DailySurveyService {
  surveys: DailySurveys;
  dailySurveysUrl: string;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.dailySurveysUrl = baseUrl + 'api/DailySurveys'
  }


  //---API calls---

  getSurvey(@Inject('BASE_URL') baseUrl: string): any {
    return this.http.get<DailySurveys[]>(baseUrl + 'api/DailySurveys');
  }

  postSurvey(surveys: DailySurveys): Observable<DailySurveys> {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });

      console.log(surveys);
      return this.http.post<DailySurveys>(this.dailySurveysUrl, surveys, {headers: headers})
  }
}
