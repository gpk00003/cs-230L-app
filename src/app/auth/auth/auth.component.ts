import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { authResponse } from "../authResponse";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  constructor(private authService : AuthService){

  }
  
  public onSubmit(data: NgForm){
    console.log("login pushed")
    console.log(data)
    this.authService.signup(data.value.email, data.value.password).subscribe(
      (data:authResponse) => {
      console.log(data);
      }, error => {
        console.log("error: " + error.error.error.message)
      }
    )
  }
}
