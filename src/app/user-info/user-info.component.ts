import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from './user-info.model';

@Injectable()
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit{
  myInfo: UserInfo | undefined;
  constructor(private http: HttpClient){
  }
  ngOnInit(): void {
    console.log('sending a get request');
    this.getUserInfo();
    console.log('registering user info');
    this.showUserInfo();
  }

  getUserInfo(){
    return this.http.get<UserInfo>('https://allrecipes-app-default-rtdb.firebaseio.com/myInfo.json')
  }

  showUserInfo(){
    this.getUserInfo().subscribe((data : UserInfo)=> {
      console.log(data);
      this.myInfo = data;
    })
  }
}
