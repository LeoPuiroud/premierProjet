import { Component } from '@angular/core';
import { AuthenticateUserService } from './AuthenticateUser.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public auth: AuthenticateUserService){}

  public connectedUser: any;


public logout(){
  this.auth.token = null;
  this.auth.adminToken = null;
}

}
