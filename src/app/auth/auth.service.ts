import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { authResponse } from "./authResponse";
@Injectable({
    providedIn: 'root',
})
export class AuthService{
    baseUrl = "https://identitytoolkit.googleapis.com/v1/accounts:"

    public constructor(private http: HttpClient){

    }
    public signup(email:string, password:string){
        const requestBody = {
            "email": email,
            "password": password,
            "returnSecureToken": true
        }
        return this.http.post<authResponse>(this.baseUrl + "signUp?key=" + environment.firebase.apiKey, requestBody);

       
    }
}