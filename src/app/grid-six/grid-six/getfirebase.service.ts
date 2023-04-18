import { sixcardModel } from './six-card/sixcard.model';
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Injectable(
    {providedIn: 'root'}
)
export class FirebaseService{
    // private baseUrl:string = "https://allrecipes-app-default-rtdb.firebaseio.com/";
    // private productsEndPoint = "sixCard.json";

    constructor(private db:AngularFireDatabase){

    }

    getProducts(){
        return this.db.list<sixcardModel>("sixCard").valueChanges();
    }

    addProduct(product: sixcardModel){
        this.db.list<sixcardModel>("sixCard").push(product);
      }
}