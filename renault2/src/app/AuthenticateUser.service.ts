import { Injectable, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './Login.service';
import { User } from './User';


@Injectable({
  providedIn: 'root'
})
export class AuthenticateUserService {

  private _token: User;
  private _adminToken = false;

constructor(private router: Router,private loginService: LoginService) { }

 public canActivate(){
  if (this._token != null){
    return true;
  }
  else {
    this.router.navigate(['/login']);
    return false;
  }
}

public adminCanActivate(){
  console.log(this._token);
  this.token.roles.forEach(role => {
    if (role == "ROLE_ADMIN"){
      this._adminToken = true;
    }
  });
  if (this._adminToken){
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
    this._token = res;
    this.router.navigate(['/mesDa']);
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

get adminToken(): any {
  return this._adminToken;
}

set adminToken(adminToken: any) {
  this._adminToken = adminToken;
}

}
