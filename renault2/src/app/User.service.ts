import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:8080/boot';

constructor(private http: HttpClient) { }

public findClient() {
  this.http.get(this.url + '/client');
}


}
