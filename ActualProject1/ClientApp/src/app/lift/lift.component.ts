import { Component } from '@angular/core';
import { getBaseUrl } from '../../main';
import { LiftService } from '../lift.service';
import { Lift } from './lift';

@Component({
    selector: 'app-lift',
    templateUrl: './lift.component.html',
    styleUrls: ['./lift.component.css']
})
/** lift component*/
export class LiftComponent {
  /** lift ctor */

  public lift: Lift;
  constructor(private api: LiftService) {
    this.lift = this.getLiftRandom();
  }

  getLiftRandom(): any {
    /*This method subscribes the Observable returned from the CallLiftRandom method and turns it into the Lift model set up in the Lift.ts folder
     * I had originally built these to be handled solely in the services but this led to most of the properties being left null while trying to load the html page -Troy*/
    this.lift = this.api.callLiftRandom(getBaseUrl()).subscribe(result => {
      this.lift = result;
      console.log(this.lift);
    })
    return this.lift;
  }
}
