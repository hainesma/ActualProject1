import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
/** dashboard component*/
export class DashboardComponent {
  /** dashboard ctor */

  //These bools control the ngIfs for what is populated for logged in user dashboard based on profile inputs)
  currentUserPhilosophyPref: number //= LoginService.currentUserProfile.philosophySchoolFk;
  isCurrentPhilosophyStoic: Boolean = false;
  isCurrentPhilosophyKanye: Boolean = false;
  isCurrentPhilosophyBuddha: Boolean = false;
  currentUserFoodRegimen: number


  constructor(private loginService: LoginService) {
    this.loginService.getProfileDetails(LoginService.currentUser).subscribe(result => {
      console.log(result);
      console.log(result.philosphySchoolFk)
      this.currentUserPhilosophyPref = result.philosphySchoolFk
      console.log(this.currentUserPhilosophyPref)
      this.GetReccomendations();
    })

    console.log(this.currentUserPhilosophyPref)
    this.currentUserFoodRegimen = loginService.currentUserProfile.foodRegimenFk;
  //  console.log(this.currentUserFoodRegimen)
  
  }

 

  GetReccomendations()
  {
    if (this.currentUserPhilosophyPref === 1)
    {
      this.isCurrentPhilosophyStoic = true;
    }
    else if (this.currentUserPhilosophyPref === 2)
    {
      this.isCurrentPhilosophyKanye = true;
    }
    else if (this.currentUserPhilosophyPref === 3)
    {
      this.isCurrentPhilosophyBuddha = true;
    }


  }
}
