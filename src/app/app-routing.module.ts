import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import {FiveIngredientDinnersComponent} from './layouts/five-ingredient-dinners/five-ingredient-dinners.component';

const routes: Routes = [   
    {
    path: '',
    component: HomeLayoutComponent
    },
    {
    path: 'fiveingredientdinners',
    component: FiveIngredientDinnersComponent
    }   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }