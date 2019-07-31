import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Da } from './Da';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DaService {
  [x: string]: any;

  private url = 'http://localhost:8080/boot';

  //Id of the selected Da to edit
  private _id: number;
  private httpHeaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private httpOptions: any = {headers: this.httpHeaders};

constructor(private http: HttpClient) { }

public listAllDa(): Observable<Da[]>{
  return this.http.get<Da[]>(this.url + '/da');
}
public findById(id: number): Observable<Da>{
  return this.http.get<Da>(this.url + "/da/" +id);
}

public save(da: Da): Observable<any>{
  console.log(da);
  return this.http.put(this.url + '/da/edit',da,this.httpOptions);
}

public delete(id: number): Observable<any> {
  return this.http.delete(this.url +'/da/delete/' + id, this.httpOptions);
}



public selectedDa(id: number) {
this._id = id;
console.log('positionnement de l_id du service');
}



get id(): number {
  return this._id;
}

set id(id: number) {
  this._id = id;
}

}
