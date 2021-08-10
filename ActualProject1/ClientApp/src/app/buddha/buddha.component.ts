import { Component } from '@angular/core';
import { getBaseUrl } from '../../main';
import { BuddhaService } from '../buddha.service';
import { BuddhaQuote } from './buddha';

@Component({
    selector: 'app-buddha',
    templateUrl: './buddha.component.html',
    styleUrls: ['./buddha.component.css']
})
/** buddha component*/
export class BuddhaComponent {
  /** buddha ctor */

  public buddhaQuote: BuddhaQuote;
  constructor(private api: BuddhaService) {
    this.buddhaQuote = this.getQuoteRandom();
  }

  getQuoteRandom(): any {
    //this method brings in the observable from the Buddha controller on the ASP.net side that pulls one buddha quote from the
    //list of poses found in the Buddha DAL then subscribes out the single quote from the observable
    this.buddhaQuote = this.api.callQuoteRandom(getBaseUrl()).subscribe(result => {
      this.buddhaQuote = result;
      console.log(this.buddhaQuote);
    })
    return this.buddhaQuote;
  }
}
