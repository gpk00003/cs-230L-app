import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './Navigation/nav-bar/nav-bar.component';
import { SecondNavBarComponent } from './Navigation/second-nav-bar/second-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SecondNavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
