import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { Pose } from './Pose';
import { YogaService } from '../yoga.service'
import { getBaseUrl } from '../../main';
@Component({
    selector: 'app-yoga',
    templateUrl: './yoga.component.html',
    styleUrls: ['./yoga.component.css']
})
/** Yoga component*/
export class YogaComponent {
  /** Yoga ctor */

  public pose: Pose;
  public apiBase: string;
  constructor(private api: YogaService) {
    this.pose = this.getPoseRandom();
  }

    
  getPoseRandom(): any {
    this.pose = this.api.callPoseRandom(getBaseUrl()).subscribe(result => {
      this.pose = result;

      console.log(this.pose);
    })
    return this.pose;

  }
}
