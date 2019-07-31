import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './Client';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http: HttpClient) { }

private url: 'http://localhost:8080/boot/user';

public listAllClient(): Observable<Client[]>{
  return this.http.get<Client[]>(this.url + '/client');
}

}
