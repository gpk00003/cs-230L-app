import { Router, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { authResponse } from "../authResponse";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  public buttonClicked!: string;
  private authObservable!: Observable<authResponse>;
  public error:string = '';
  public isError:boolean;

  constructor(private authService : AuthService, private router:Router){
    this.isError = false;
  }
  
  public onSubmit(data: NgForm){
    console.log(this.buttonClicked + " pushed")
    console.log(data)
    
    if(this.buttonClicked==='signup'){
      this.authObservable = this.authService.signup(data.value.email, data.value.password);
    }
    else if(this.buttonClicked==='login'){
      this.authObservable = this.authService.login(data.value.email, data.value.password);
    }
    
    this.authObservable.subscribe(
      (data:authResponse) => {
      console.log(data);
      this.router.navigate(['success'])
      
      }, error => {
        console.log("error: " + error.error.error.message)
        this.error = error.error.error.message
        this.isError = true
      }
    )
  }
}
