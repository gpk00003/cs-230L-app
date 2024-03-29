import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './Navigation/nav-bar/nav-bar.component';
import { SecondNavBarComponent } from './Navigation/second-nav-bar/second-nav-bar.component';
import { BigLeftFourRightComponent } from './big-left-four-right/big-left-four-right.component';
import { GridSixComponent } from './grid-six/grid-six/grid-six.component';
import { SixCardComponent } from './grid-six/grid-six/six-card/six-card.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { FiveIngredientDinnersComponent } from './layouts/five-ingredient-dinners/five-ingredient-dinners.component';
import { OnePotMealComponent } from './layouts/one-pot-meal/one-pot-meal.component';
import { QuickneasyComponent } from './layouts/quickneasy/quickneasy.component';
import { ThirtyMinuteMealsComponent } from './layouts/thirty-minute-meals/thirty-minute-meals.component';
import { SoupStewChiliComponent } from './layouts/soup-stew-chili/soup-stew-chili.component';
import { FourAcrossCardComponent } from './four-across-cards/four-across-card/four-across-card.component';
import { FourAcrossGridComponent } from './four-across-cards/four-across-grid/four-across-grid.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './user-info/user-info.component';
import { AddCardComponent } from './add-card/add-card.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
import { AngularFireModule } from '@angular/fire/compat';
import { AuthComponent } from './auth/auth/auth.component';
import { SuccessfulLoginComponent } from './successful-login/successful-login.component'; 

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SecondNavBarComponent,
    BigLeftFourRightComponent,
    GridSixComponent,
    SixCardComponent,
    HomeLayoutComponent,
    FiveIngredientDinnersComponent,
    OnePotMealComponent,
    QuickneasyComponent,
    ThirtyMinuteMealsComponent,
    SoupStewChiliComponent,
    FourAcrossCardComponent,
    FourAcrossGridComponent,
    UserInfoComponent,
    AddCardComponent,
    AuthComponent,
    SuccessfulLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)), provideDatabase(() => getDatabase()),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
