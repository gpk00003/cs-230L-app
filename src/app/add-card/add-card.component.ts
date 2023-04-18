import { Component, OnInit } from '@angular/core';
import { sixcardModel } from '../grid-six/grid-six/six-card/sixcard.model';
import { FirebaseService } from '../grid-six/grid-six/getfirebase.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit{

  constructor(private fbs:FirebaseService){

  }
  addProduct(formResult: sixcardModel){
    console.log("clicked");
    console.log(formResult)
    this.fbs.addProduct(formResult)
  }
  ngOnInit(): void {
    
  }
}
