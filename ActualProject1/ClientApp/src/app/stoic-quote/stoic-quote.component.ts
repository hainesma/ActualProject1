import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Stoic } from './stoic-quote'
import {StoicQuoteService} from '../stoic-quote.service'

@Component({
  selector: 'app-stoic-quote',
  templateUrl: './stoic-quote.component.html',
  styleUrls: ['./stoic-quote.component.css'],
  providers: [StoicQuoteService]
})
/** stoic-quote component*/
export class StoicQuoteComponent {
  /** stoic-quote ctor */
  public quote: Stoic = {} as Stoic;

  constructor(private api: StoicQuoteService) {

    this.quote = this.callStoicQuoteRandom();

  }

  callStoicQuoteRandom() {
    this.quote = this.api.getStoicQuoteRandom().subscribe(result => {
      this.quote = result;

      console.log(this.quote);
    })
      return this.quote;
    }
  
}

