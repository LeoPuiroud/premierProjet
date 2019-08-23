import { Injectable, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './Login.service';
import { User } from './User';
import { Roles } from './Roles.enum';


@Injectable({
  providedIn: 'root'
})
export class AuthenticateUserService {

  private _token: User;
  private _adminToken = false;

  constructor(private router: Router, private loginService: LoginService) { }

  public canActivate() {
    if (this._token != null) {
      return true;
    }
    else {
      this.router.navigate(['/needAuth']);
      return false;
    }
  }

  public adminCanActivate() {
    var a = false;
    console.log(this._token);
    if (this._token == null) {
      this.router.navigate(['/needAuth']);
      return a;
    }
    else {
      this._token.roles.forEach(role => {
        console.log(role);
        console.log(Roles.ROLE_ADMIN);
        if (role == Roles.ROLE_ADMIN) {
          this._adminToken = true;
          a = true;
          console.log(this._adminToken);
        }
      });
      return a;
    }
  }

  public adminCanSee() {
    this._token.roles.forEach(role => {
      console.log(role);
      if (role == Roles.ROLE_ADMIN) {
        return true;
      }
      else {
        return false;
      }
  })
}

  public login(user: User) {
    this.loginService.login(user).subscribe((res => {
      if (res) {
        this._token = res;
        this.router.navigate(['/mesDa']);
      }
      else {
        console.log(btoa(user.password))
        console.log(res.password);
        this.router.navigate(['/needAuth']);
      }
    }),
      err => {
        this.router.navigate(['/needAuth']);
      });
  }

  public checkRole(role: Roles) {
    var a = true
    this._token.roles.forEach(r => {
      if (r == role) {
        a = false
      }
    })
    return a;
  }

  
  public forClient(){
    var a = true;
    if (this.token != null) {
    this._token.roles.forEach(e => {
      if (e == 'ROLE_CLIENT'){
        a = false;
      }
    });
    }
    return a;
  }

  public forCdp(){
    var a = true;
    if (this.token != null) {
    this._token.roles.forEach(e => {
      if (e == 'ROLE_CDP'){
        a = false;
      }
    });
  }
    return a;
  }
  public forCorrespondant(){
    var a = true;
    if (this.token != null) {
    this._token.roles.forEach(e => {
      if (e == 'ROLE_CORRESPONDANT'){
        a = false;
      }
    });
  }
    return a;
  }

  public forSpecialiste(){
    var a = true;
    if (this.token != null) {
    this._token.roles.forEach(e => {
      if (e == 'ROLE_SPECIALISTE'){
        a = false;
      }
    });
  }
    return a;
  }

  public forPilote_da(){
    var a = true;
    if (this.token != null) {
    this._token.roles.forEach(e => {
      if (e == 'ROLE_PILOTEDA'){
        a = false;
      }
    });
  }
    return a;
  }

  public forAdmin(){
    var a = true;
    if (this.token != null) {
    this._token.roles.forEach(e => {
      if (e == 'ROLE_ADMIN'){
        a = false;
      }
    });
  }
    return a;
  }

  //methode pour pouvoir afficher le DA correspondantes dans MesDa les /nombres permettent d'atteindre les roles dans la BDD qui sont stocké par chiffre
  public cheminListDa(){
    var a;
    this._token.roles.forEach(r => {
      
      if (r == 'ROLE_CORRESPONDANT'){
        a = 'verification_1/1'
      }
      if (r == 'ROLE_CDP'){
        a = 'validation_1/é'
      }
      if (r == 'ROLE_SPECIALISTE'){
        a = 'verification_2/3'
      }
      if (r == 'ROLE_CDP'){
        a = 'validation_2/4'
      }
      if (r == 'ROLE_PILOTEDA'){
        a = 'realisation/5'
      }
      
    });
    return a;
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
