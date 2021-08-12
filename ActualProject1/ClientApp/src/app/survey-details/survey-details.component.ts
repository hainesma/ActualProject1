import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { DailySurveys } from '../daily-surveys/DailySurveys';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-survey-details',
  templateUrl: './survey-details.component.html',
  styleUrls: ['./survey-details.component.css'],
  providers: [HttpClient]
})
/** survey-details component*/
export class SurveyDetailsComponent {
  title = 'appBootstrap';

  //array of Surveys
  public surveys: DailySurveys;
  closeResult: string;
  public apiBase: string = "";
  public http: HttpClient = null;

  /** survey-details ctor */
  constructor(private modalService: NgbModal, http: HttpClient, @Inject('BASE_URL') baseUrl: string, private route: ActivatedRoute) {
    console.log(route.snapshot.params.Id);
    http.get<DailySurveys>(baseUrl + 'api/dailysurveys/Id' + route.snapshot.params.Id).subscribe(result => {
      this.surveys = result;
      console.log(this.surveys);
    }, error => console.error(error));
  }
}
