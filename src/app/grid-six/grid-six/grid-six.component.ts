import { FirebaseService } from './getfirebase.service';
import { Component, OnInit } from '@angular/core';
import { cardlist } from './six-card/cardlist';
import { sixcardModel } from './six-card/sixcard.model';

@Component({
  selector: 'app-grid-six',
  templateUrl: './grid-six.component.html',
  styleUrls: ['./grid-six.component.css']
})
export class GridSixComponent implements OnInit{
  title = 'cs-230L-app';
  sixcards: sixcardModel [] = [];

  constructor(private getfirebase:FirebaseService){
    // for (var card of cardlist){
    //   console.log(card)
    //   this.sixcards.push(card);
    // }
  }

  ngOnInit(){
    this.getfirebase.getProducts().subscribe((data: sixcardModel []) =>{
      console.log(data.length)
      for (var x of data){
        console.log(x)
        this.sixcards.push(x)
      }
    })
  }
}
