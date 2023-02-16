import { Component } from '@angular/core';
import { cardlist } from './grid-six/six-card/cardlist';
import { sixcardModel } from './grid-six/six-card/sixcard.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cs-230L-app';
  sixcards: sixcardModel [] = [];

  constructor(){
    for (var card of cardlist){
      this.sixcards.push(card);
    }
  }
}
