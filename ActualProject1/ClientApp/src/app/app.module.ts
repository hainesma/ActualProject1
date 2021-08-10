import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { StoicQuoteComponent } from './stoic-quote/stoic-quote.component';
import { RecipeComponent } from './recipe/recipe.component';
import { YogaComponent } from './yoga/yoga.component';
import { KanyeComponent } from './kanye/kanye.component';
import { BuddhaComponent } from './buddha/buddha.component';
import { LiftComponent } from './lift/lift.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GuestDashComponent } from './guest-dash/guest-dash.component';
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    DashboardComponent,
    GuestDashComponent,
    StoicQuoteComponent,
    RecipeComponent,
    YogaComponent,
    KanyeComponent,
    BuddhaComponent,
    LiftComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
