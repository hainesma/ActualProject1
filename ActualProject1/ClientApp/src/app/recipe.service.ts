import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Recipe } from './recipe/recipe';
import { Secret } from './secrets';


@Injectable({
  providedIn: 'root'
})



export class RecipeService {
  public appId = "e3f8630c"
  public apiBase = "https://api.edamam.com/api/recipes/v2?type=public";
  /*  This is the search term we are searching we need to figure out what to do with*/
  //both search term and preference will likely need to be moved into the method call so it can be changed based on user
  //preferences from the survey once we are ready for this, still waiting for User tables to be finalized before I go ahead with
  //modifying this method call
  public searchTerm = "chicken";
  public FoodPreference = ""

  

  constructor(private http: HttpClient, private loginService: LoginService) {

  }
  
 

 
  

  callRecipe(currentUserFoodRegimen:number) {
    //this method returns an observable containing an array of ALL hits returned by the edaman nutrition recipe search API
    //it will need to be subscribed in the component class later


    //let foodPreferenceID = this.loginService.currentUserProfile.foodRegimenFk;
    //Let the ugly if chain begin!
    if (currentUserFoodRegimen === 1) { this.FoodPreference="vegan" }
    if (currentUserFoodRegimen === 2) { this.FoodPreference = "keto-friendly"}
    if (currentUserFoodRegimen === 3) { this.FoodPreference = "paleo" }
    if (currentUserFoodRegimen === 4) { this.FoodPreference = "egg-free"}
    if (currentUserFoodRegimen === 5) { this.FoodPreference = "fodmap-free" }
    if (currentUserFoodRegimen === 6) { this.FoodPreference = "gluten-free"}
    if (currentUserFoodRegimen === 7) { this.FoodPreference = "kosher"}
    if (currentUserFoodRegimen === 8) { this.FoodPreference = "tree-nut-free"}
    if (currentUserFoodRegimen === 9) { this.FoodPreference = "low-sugar"}
    if (currentUserFoodRegimen === 10) { this.FoodPreference = "soy-free"}
    if (currentUserFoodRegimen === 11) { this.FoodPreference = "kidney-friendly"}
    console.log(this.FoodPreference)

    // Construct the API call
    let response = this.http.get<Recipe>(this.apiBase + '&q=' + this.searchTerm + '&app_id=' + this.appId + '&app_key=' + Secret.recipeKey + '&health=' + this.FoodPreference+ "&random=true")
    return response;  }

  callRecipeSpecific(searchTerm:string,health:string) {
    //this method returns an observable containing an array of ALL hits returned by the edaman nutrition recipe search API
    //it will need to be subscribed in the component class later


    let response = this.http.get<Recipe>(this.apiBase + '&q=' + searchTerm + '&app_id=' + this.appId + '&app_key=' + Secret.recipeKey +'&health='+health+ "&random=true")
    return response;
  }
}




