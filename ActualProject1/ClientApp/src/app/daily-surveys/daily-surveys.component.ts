import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { DailySurveys } from './DailySurveys'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { DailySurveyService } from '../daily-survey.service';
import { LoginService } from '../login.service';
import { getBaseUrl } from '../../main';
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
  public currentUserId: number;

    /** DailySurveys ctor */ 
  constructor(private modalService: NgbModal, http: HttpClient, private loginService: LoginService
/*, private userProfileService: UserProfileService*/,/* private authorize: AuthorizeService,*/ @Inject('BASE_URL') baseUrl: string) {
    this.loginService.getProfileDetails(LoginService.currentUser).subscribe(result => {
      console.log(result);
      console.log(result.Id)
      this.currentUserId = result.Id
      console.log(this.currentUserId)
      this.getSurveys(this.currentUserId)
      //This is where you call your get surveys
    })

    this.apiBase = baseUrl;
    this.http = http;

  }

  getSurveys(Id: number) {
    this.http.get<DailySurveys[]>(getBaseUrl() + 'api/dailysurveys/Id='+ Id).subscribe(result => {
      this.surveys = result;
      console.log(this.surveys);
     }, error => console.error(error));


  }
 
  /** function to add surveys to database */
  addSurvey(form: NgForm) {
   
    /** Attempting to connect Surveys to userprofiles  */
    let userId = form.form.value.userId
    let Id = form.form.value.Id
    let emotion =  parseInt(form.form.value.emotion);
    let goal = form.form.value.goal;
    let achieved = form.form.value.previousGoalAchieved === "true" ;
    let energyLevel = parseInt(form.form.value.energyLevel);


    let surveys: DailySurveys = { Id: 0, userId:6, emotionLevel: emotion, energyLevel: energyLevel,dailyGoal: goal, previousGoalAchieved: achieved}
    console.log(achieved)
    console.log(surveys)
    this.http.post<DailySurveys>(this.apiBase + 'api/DailySurveys', surveys).subscribe(result => {
      console.log(result)

      this.surveys.push(result);
      console.log(this.surveys);
    });
  }

  removeSurvey(index: number) {
    let id: number = index;
    console.log(index);
    console.log(id);
    this.http.delete<DailySurveys>(this.apiBase + 'api/dailysurveys/id' + id).subscribe(result => {
      console.log(result)
      this.surveys.splice(id, 1)
    });
  }

  refreshAndRemove(index: number) {
    this.removeSurvey(index);
    window.location.reload();
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
