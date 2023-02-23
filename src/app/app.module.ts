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

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SecondNavBarComponent,
    BigLeftFourRightComponent,
    GridSixComponent,
    SixCardComponent,
    HomeLayoutComponent,
    FiveIngredientDinnersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
