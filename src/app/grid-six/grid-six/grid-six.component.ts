import { Component } from '@angular/core';
import { cardlist } from './six-card/cardlist';
import { sixcardModel } from './six-card/sixcard.model';

@Component({
  selector: 'app-grid-six',
  templateUrl: './grid-six.component.html',
  styleUrls: ['./grid-six.component.css']
})
export class GridSixComponent {
  title = 'cs-230L-app';
  sixcards: sixcardModel [] = [];

  constructor(){
    for (var card of cardlist){
      console.log(card)
      this.sixcards.push(card);
    }
  }
}
