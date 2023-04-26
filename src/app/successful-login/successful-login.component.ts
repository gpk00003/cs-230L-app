import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-successful-login',
  templateUrl: './successful-login.component.html',
  styleUrls: ['./successful-login.component.css']
})
export class SuccessfulLoginComponent implements OnInit{
  
  constructor(private router:Router){
    
  }
  ngOnInit(): void {
    
    setTimeout(() => {
      this.router.navigate(['']);
  }, 2000);
  }

}
