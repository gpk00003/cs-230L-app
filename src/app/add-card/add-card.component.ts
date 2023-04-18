import { Component } from '@angular/core';
import { sixcardModel } from '../grid-six/grid-six/six-card/sixcard.model';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent {

  addProduct(formResult: sixcardModel){
    console.log("clicked");
    console.log(formResult)
  }
}
