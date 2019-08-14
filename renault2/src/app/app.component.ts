import { Component } from '@angular/core';
import { AuthenticateUserService } from './AuthenticateUser.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public auth: AuthenticateUserService, private router: Router){}

  public connectedUser: any;

  ngOnInit() {
    this.acceuil()
  }

public logout(){
  this.auth.token = null;
  this.auth.adminToken = null;
}

public acceuil(){
  if (this.auth.token == null){
this.router.navigate(['login'])
  }
}

}
