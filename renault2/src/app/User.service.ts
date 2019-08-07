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
private _selectedClient: Client;
private _selectedCdp: Cdp;
private _selectedCorrespondant: Correspondant;
private _selectedSpecialiste: Specialiste;
private _selectedPilote_da: Pilote_Da;

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

public saveClient(client: Client): Observable<any>{
  console.log(client);
  return this.http.put('http://localhost:8080/boot/user/client/edit',client);
}

public saveCdp(cdp: Cdp): Observable<any>{
  console.log(cdp);
  return this.http.put('http://localhost:8080/boot/user/cdp/edit',cdp);
}

public saveCorrespondant(correspondant: Correspondant): Observable<any>{
  console.log(correspondant);
  return this.http.put('http://localhost:8080/boot/user/correspondant/edit',correspondant);
}

public saveSpecialiste(specialiste: Specialiste): Observable<any>{
  console.log(specialiste);
  return this.http.put('http://localhost:8080/boot/user/specialiste/edit',specialiste);
}

public savePilote_da(pilote_da: Pilote_Da): Observable<any>{
  console.log(pilote_da);
  return this.http.put('http://localhost:8080/boot/user/pilote_da/edit',pilote_da);
}

get selectedClient(): Client {
  return this._selectedClient;
}

set selectedClient(selectedClient: Client) {
  this._selectedClient = selectedClient;
}

get selectedCdp(): Cdp {
  return this._selectedCdp;
}

set selectedCdp(selectedCdp: Cdp) {
  this._selectedCdp = selectedCdp;
}

get selectedCorrespondant(): Correspondant {
  return this._selectedCorrespondant;
}

set selectedCorrespondant(selectedCorrespondant: Correspondant) {
  this._selectedCorrespondant = selectedCorrespondant;
}

get selectedSpecialiste(): Specialiste {
  return this._selectedSpecialiste;
}

set selectedSpecialiste(selectedSpecialiste: Specialiste) {
  this._selectedSpecialiste = selectedSpecialiste;
}

get selectedPilote_da(): Pilote_Da {
  return this._selectedPilote_da;
}

set selectedPilote_da(selectedPilote_da: Pilote_Da) {
  this._selectedPilote_da = selectedPilote_da;
}

}
