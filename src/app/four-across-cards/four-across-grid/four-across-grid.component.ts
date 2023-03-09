import { Component , Input, OnInit} from '@angular/core';
import { fourAcrosscardModel } from '../four-across-card/four-across-card.model';
import { fivedinnerscardlist } from '../four-across-card/fivedinners';
import { onepotcardlist } from '../four-across-card/onepot';


@Component({
  selector: 'app-four-across-grid',
  templateUrl: './four-across-grid.component.html',
  styleUrls: ['./four-across-grid.component.css']
})
export class FourAcrossGridComponent implements OnInit{
  @Input() list!: string;

  fourcards: fourAcrosscardModel [] = [];

  constructor(){
    
  }
  ngOnInit(): void {
    var cardlist
    console.warn(this.list);
    if(this.list === "fivedinners"){
      cardlist = fivedinnerscardlist;
    } else
      cardlist = onepotcardlist;
    for (var card of cardlist){
      console.log(card)
      this.fourcards.push(card);
    }
  }
}
