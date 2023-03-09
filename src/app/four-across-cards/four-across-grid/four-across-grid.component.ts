import { Component } from '@angular/core';
import { fourAcrosscardModel } from '../four-across-card/four-across-card.model';
import { fouracrosscardlist } from '../four-across-card/fouracrosscardlist';

@Component({
  selector: 'app-four-across-grid',
  templateUrl: './four-across-grid.component.html',
  styleUrls: ['./four-across-grid.component.css']
})
export class FourAcrossGridComponent {
  fourcards: fourAcrosscardModel [] = [];

  constructor(){
    console.log("hello");
    for (var card of fouracrosscardlist){
      console.log(card)
      this.fourcards.push(card);
    }
  }
}
