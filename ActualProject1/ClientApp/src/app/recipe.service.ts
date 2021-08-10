import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe/recipe';
import { Secret } from './secrets';


@Injectable({
  providedIn: 'root'
})



export class RecipeService {
  
  

  constructor(private http: HttpClient, ) { }
  
  public appId = "e3f8630c"
  public apiBase = "https://api.edamam.com/api/recipes/v2?type=public";
  /*  This is the search term we are searching we need to figure out what to do with*/
  //both search term and preference will likely need to be moved into the method call so it can be changed based on user
  //preferences from the survey once we are ready for this, still waiting for User tables to be finalized before I go ahead with
  //modifying this method call
  public searchTerm = "chicken";
  public FoodPreference = "keto-friendly"



  callRecipe() {
    //this method returns an observable containing an array of ALL hits returned by the edaman nutrition recipe search API
    //it will need to be subscribed in the component class later



    //The user preferences are hardcoded into this API call I believe if we change them into the method Call for call recipe as parameters
    //we could change the recipe suggestion based on User preferences but as it is its forcing chicken/keto recipes which personally sounds good to me
    //but this is NOT the intended function for our Application as a whole.
    //something like callrecipe(foodPreference,searchTerms)

    // Construct the API call
    let response = this.http.get<Recipe>(this.apiBase + '&q=' + this.searchTerm + '&app_id=' + this.appId + '&app_key=' + Secret.recipeKey + "&random=true")
    return response;  }

  callRecipeSpecific(searchTerm:string,health:string) {
    //this method returns an observable containing an array of ALL hits returned by the edaman nutrition recipe search API
    //it will need to be subscribed in the component class later


    let response = this.http.get<Recipe>(this.apiBase + '&q=' + searchTerm + '&app_id=' + this.appId + '&app_key=' + Secret.recipeKey +'&health='+health+ "&random=true")
    return response;
  }
}




