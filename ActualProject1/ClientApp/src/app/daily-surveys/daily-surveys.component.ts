import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { DailySurveys } from './DailySurveys'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { DailySurveyService } from '../daily-survey.service';
//import { UserProfile } from '../userProfile';
//import { UserProfileService } from '../userProfile.service';
//import { AuthorizeService } from '../../api-authorization/authorize.service';

@Component({
    selector: 'app-daily-surveys',
    templateUrl: './daily-surveys.component.html',
  styleUrls: ['./daily-surveys.component.css'],
  providers: [HttpClient]
})
/** DailySurveys component*/
export class DailySurveysComponent {
  title = 'appBootstrap';

  //array of Surveys
  public surveys: DailySurveys[] = [];
  closeResult: string;
  public apiBase: string = "";
  public http: HttpClient = null;
  currentUserId: any;

    /** DailySurveys ctor */ 
  constructor(private modalService: NgbModal, http: HttpClient/*, private userProfileService: UserProfileService*/,/* private authorize: AuthorizeService,*/ @Inject('BASE_URL') baseUrl: string) {
    http.get<DailySurveys[]>(baseUrl + 'api/dailysurveys').subscribe(result => {
      this.surveys = result;
      console.log(this.surveys);
    }, error => console.error(error));

    this.apiBase = baseUrl;
    this.http = http;
    //{
    //  this.authorize.getUser().subscribe((result): any => {
    //    console.log(result)
    //    this.currentUserId = result;
    //  })
    //}

  }
 
  /** function to add surveys to database */
  addSurvey(form: NgForm) {
   

    let Id = form.form.value.Id;
    /** Attempting to connect Surveys to userprofiles  */
    let UserId = parseInt(form.form.value.aspNetUserFk);
    let emotion =  form.form.value.emotion * 1;
    let goal = form.form.value.goal;
    let achieved = form.form.value.previousGoalAchieved;
    let energyLevel = form.form.value.energyLevel;

    if (achieved === "") {
      achieved = false;
    }

    let surveys: DailySurveys = { Id: 0, UserId: this.currentUserId.sub, emotionLevel: emotion, energyLevel: energyLevel,DailyGoal: goal, previousGoalAchieved: achieved}
    console.log(achieved)
    console.log(surveys)
    this.http.post<DailySurveys>(this.apiBase + 'api/dailysurveys', surveys).subscribe(result => {
      console.log(result)

      this.surveys.push(result); 
    });
  }

  removeSurvey(index: number) {
    let id: number = index;
    console.log(index);
    console.log(id);
    this.http.delete<DailySurveys>(this.apiBase + 'api/dailysurveys/' + id).subscribe(result => {
      console.log(result)
      this.surveys.splice(id, 1)
    });
  }



  //* These open and close the survey modal*/

  open(content) {

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {

      this.closeResult = `Closed with: ${result}`;

    }, (reason) => {

      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;

    });

  }

  private getDismissReason(reason: any): string {

    if (reason === ModalDismissReasons.ESC) {

      return 'by pressing ESC';

    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {

      return 'by clicking on a backdrop';

    }
    else
    {
      return `with: ${reason}`;

    }

  }

}
