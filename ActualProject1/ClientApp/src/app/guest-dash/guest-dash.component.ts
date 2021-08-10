import { Component } from '@angular/core';
import { BuddhaService } from '../buddha.service';
import { StoicQuoteService } from '../stoic-quote.service'
import { KanyeService } from '../kanye.service';
import { NgForm } from '@angular/forms';
import { getBaseUrl } from '../../main';
import { RecipeService } from '../recipe.service';
import { Recipe, RecipeClass  } from '../recipe/recipe';


@Component({
    selector: 'app-guest-dash',
    templateUrl: './guest-dash.component.html',
    styleUrls: ['./guest-dash.component.css']
})
/** guest-dash component*/
export class GuestDashComponent {
  /** guest-dash ctor */
  constructor(private buddhaService: BuddhaService, private stoicQuoteService: StoicQuoteService, private kanyeService: KanyeService, private recipeService: RecipeService) {

  }
  quote: any;
  searchResult:Recipe
  recipe: RecipeClass
  isRecipeSearchDone: Boolean = false;
  isCurrentPhilosophyStoic: Boolean = false;
  isCurrentPhilosophyKanye: Boolean = false;
  isCurrentPhilosophyBuddha: Boolean = false;


  getGuestReccomendations(form: NgForm) {
    let searchTerm = form.form.value.searchTerm;
    let foodRegimen = form.form.value.foodRegimen;
    let philosophySchool = form.form.value.philosophySchool;


     this.recipeService.callRecipeSpecific(searchTerm, foodRegimen).subscribe(
       result => {
         this.searchResult = result;
        this.recipe = this.searchResult.hits[0].recipe;
        this.recipe.servingcalories = (this.recipe.calories / this.recipe.yield);
         console.log(this.recipe)
       
      })
    this.isRecipeSearchDone = true;

    if (philosophySchool === "Stoic") {
      this.quote = this.stoicQuoteService.getStoicQuoteRandom().subscribe(result => {
        this.quote = result;

        console.log(this.quote);
      })
      this.isCurrentPhilosophyStoic = true;
      this.isCurrentPhilosophyKanye = false;
      this.isCurrentPhilosophyBuddha = false;
      return this.quote;
    }
    else if (philosophySchool === "Kanye") {
      this.quote=this.kanyeService.callKayne().subscribe(result => {
        this.quote = result;
        console.log(result)
      })
      this.isCurrentPhilosophyKanye = true;
      this.isCurrentPhilosophyStoic = false;
      this.isCurrentPhilosophyBuddha = false;
    }
     else if (philosophySchool ==="Buddha"){
      this.quote= this.buddhaService.callQuoteRandom(getBaseUrl()).subscribe(result => {
          this.quote = result;
          console.log(this.quote);
        })
      this.isCurrentPhilosophyBuddha = true;
      this.isCurrentPhilosophyStoic = false;
      this.isCurrentPhilosophyKanye = false;
      }
    }


  }


