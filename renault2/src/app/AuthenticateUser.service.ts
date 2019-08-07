import { Injectable, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './Login.service';
import { User } from './User';


@Injectable({
  providedIn: 'root'
})
export class AuthenticateUserService {

  private _token: any;

constructor(private router: Router,private loginService: LoginService) { }

 public canActivate(){
  if (this.token != null){
    return true;
  }
  else {
    this.router.navigate(['/login']);
    return false;
  }
}

  public login(user: User){
this.loginService.login(user).subscribe((res=>{
  if (res){
    this._token = btoa(user.username + ':' + user.password);
    this.router.navigate(['/list_da']);
  }
  else{
    console.log(btoa(user.password))
    console.log(res.password);
    this.router.navigate(['/home']);
  }
}),
  err=>{
this.router.navigate(['/home']);
  });
}

get token(): any {
  return this._token;
}

set token(token: any) {
  this._token = token;
}

}
