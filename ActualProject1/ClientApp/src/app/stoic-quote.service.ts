import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Stoic } from "./stoic-quote/stoic-quote";


@Injectable({
providedIn:'root'
})
export class StoicQuoteService {

  public apiBase: string = "https://stoic-server.herokuapp.com/"
  constructor(private http: HttpClient) { }
  public quote: Stoic;

  getStoicQuoteRandom(): any {
    //this method returns a random stoic quote from the library of quotes,
    //it does not generate the same quote everytime we visit this page for the day, if
    //we would like it to this we will have to figure out a way to generate a random quote
    //id and save it somewhere for the day or the user,
    let url = this.apiBase + 'random';

    let response =this.http.get<Stoic>(url)
    return response;
    
  }

  getStoicQuotebyId(id: number): any {
    //this method is for if we decide to pregenerate a quote number for the user to look at later on
    //it was simple enough to write this out for but I'm not sure if we will switch to it, at least this
    //low on my priority list until after the MVP is finished.

    let url = this.apiBase + '/quotes/' + id;

    this.http.get<Stoic>(url).subscribe(result => {
      this.quote = result
      console.log(this.quote);

      return this.quote;

    })
  }
}
