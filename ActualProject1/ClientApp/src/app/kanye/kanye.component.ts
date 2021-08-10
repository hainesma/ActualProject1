import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { KanyeService } from '../kanye.service';
import {Kanye} from './Kanye'

@Component({
    selector: 'app-kanye',
    templateUrl: './kanye.component.html',
    styleUrls: ['./kanye.component.css']
})
/** kanye component*/
export class KanyeComponent {
  /** kanye ctor */
  public kanyeQuote: Kanye;
  public apiBase: string = "https://api.kanye.rest/";
  constructor(private api: KanyeService) {
    this.kanyeQuote = this.getKanye();
  }

  getKanye(): any {
    this.api.callKayne().subscribe(result => {
      this.kanyeQuote = result;
      console.log(result)
    })
  }
}
