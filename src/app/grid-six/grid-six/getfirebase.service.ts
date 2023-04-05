import { sixcardModel } from './six-card/sixcard.model';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable(
    {providedIn: 'root'}
)
export class FirebaseService{
    private baseUrl:string = "https://allrecipes-app-default-rtdb.firebaseio.com/";
    private productsEndPoint = "sixCard.json";

    constructor(private http:HttpClient){

    }

    getProducts(){
        return this.http.get<sixcardModel []>(this.baseUrl + this.productsEndPoint);
    }
}