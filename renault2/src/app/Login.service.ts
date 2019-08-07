import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

constructor(private http: HttpClient) { }

private httpHeaders: HttpHeaders;
private httpOptions: any;

private url: 'http://localhost:8080/boot';

public login(user: User): Observable<any> {
this.httpHeaders = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa(user.username + ':' + user.password)});
this.httpOptions = {headers: this.httpHeaders};
console.log(user.username);
console.log(this.httpHeaders);
console.log('Basic ' + btoa(user.username + ':' + user.password));
console.log(this.httpOptions);
return this.http.post('http://localhost:8080/boot/user/login/' + user.username,user.username,this.httpOptions)
}

}
