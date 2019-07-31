import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './Client';
import { Observable } from 'rxjs';
import { Correspondant } from './Correspondant';
import { Cdp } from './Cdp';
import { Specialiste } from './Specialiste';
import { Pilote_Da } from './Pilote_Da';


@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http: HttpClient) { }

private url: 'http://localhost:8080/boot';

public listAllClient(): Observable<Client[]>{
  return this.http.get<Client[]>('http://localhost:8080/boot/user/client');
}

public listAllCorrespondant(): Observable<Correspondant[]>{
  return this.http.get<Correspondant[]>('http://localhost:8080/boot/user/correspondant');
}

public listAllCdp(): Observable<Cdp[]>{
  return this.http.get<Cdp[]>('http://localhost:8080/boot/user/cdp');
}

public listAllSpecialiste(): Observable<Specialiste[]>{
  return this.http.get<Specialiste[]>('http://localhost:8080/boot/user/specialiste');
}

public listAllPilote_da(): Observable<Pilote_Da[]>{
  return this.http.get<Pilote_Da[]>('http://localhost:8080/boot/user/piloteda');
}

}
