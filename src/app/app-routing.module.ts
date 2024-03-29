import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import {FiveIngredientDinnersComponent} from './layouts/five-ingredient-dinners/five-ingredient-dinners.component';
import { OnePotMealComponent } from './layouts/one-pot-meal/one-pot-meal.component';
import { QuickneasyComponent } from './layouts/quickneasy/quickneasy.component';
import { ThirtyMinuteMealsComponent } from './layouts/thirty-minute-meals/thirty-minute-meals.component';
import { SoupStewChiliComponent } from './layouts/soup-stew-chili/soup-stew-chili.component';
import { AddCardComponent } from './add-card/add-card.component';
import { AuthComponent } from './auth/auth/auth.component';
import { SuccessfulLoginComponent } from './successful-login/successful-login.component';

const routes: Routes = [   
    {
    path: '',
    component: HomeLayoutComponent
    },
    {
    path: 'fiveingredientdinners',
    component: FiveIngredientDinnersComponent
    },
    {
    path: 'onepotmeal',
    component: OnePotMealComponent
    },
    {
      path: 'quickneasy',
      component: QuickneasyComponent
    },
    {
      path: 'thirtyminmeals',
      component: ThirtyMinuteMealsComponent
    },
    {
      path: 'soupstewchili',
      component: SoupStewChiliComponent
    },
    {
      path: 'admin',
      component: AddCardComponent
    },
    {
      path: 'auth',
      component: AuthComponent
    },
    {
      path: 'success',
      component: SuccessfulLoginComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }