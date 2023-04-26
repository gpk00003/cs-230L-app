import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { authResponse } from "./authResponse";
import { Subject, tap } from "rxjs";
import { User } from "./user.model";
@Injectable({
    providedIn: 'root',
})
export class AuthService{
    baseUrl = "https://identitytoolkit.googleapis.com/v1/accounts:"

    private user = new Subject<User>()

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

    public login(email:string, password:string){
        const requestBody = {
            "email": email,
            "password": password,
            "returnSecureToken": true
        }
        return this.http.post<authResponse>(this.baseUrl + "signInWithPassword?key=" + environment.firebase.apiKey, requestBody)
            .pipe(
                tap(
                    (data:authResponse) => {
                        const currentTime = new Date().getTime()
                        const expirationDate = new Date(currentTime + +data.expiresIn*1000)
                        const newUser = new User(data.email, data.localId, data.idToken, expirationDate)
                        this.user.next(newUser)
                        console.log(newUser)
                    }
                )
            )
    }
}