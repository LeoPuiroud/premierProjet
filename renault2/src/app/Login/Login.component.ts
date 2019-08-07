import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Login.service';
import { AuthenticateUserService } from '../AuthenticateUser.service';
import { User } from '../User';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  private _user: User = new User();
  
  private _connectedUser: User;
 

  constructor(private auth: AuthenticateUserService) { }

  ngOnInit() {
    this.userConnected();
  }

  public login() {
    this.auth.login(this._user)
  }

  public userConnected(){
    this._connectedUser = this.auth.token;
  }

  get user(){
    return this._user;
  }

  set user (user: User) {
    this._user = user;
  }

  get connectedUser(){
    return this._connectedUser;
  }

  set connectedUser(connectedUser: User){
    this._connectedUser = connectedUser;
  }

}
