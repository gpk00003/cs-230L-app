import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import {DinnersComponent} from './layouts/dinners/dinners.component';

const routes: Routes = [   
    {
    path: '',
    component: HomeLayoutComponent
    },
    {
    path: 'dinners',
    component: DinnersComponent
    }   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }