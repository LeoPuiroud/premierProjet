
import { Component, OnInit, Input } from '@angular/core';
import { Da } from '../Da';
import { DaService } from '../da.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from '../Client';
import { Specialiste } from '../Specialiste';
import { Correspondant } from '../Correspondant';
import { Pilote_Da } from '../Pilote_Da';
import { Cdp } from '../Cdp';
import { UserService } from '../User.service';
import { AuthenticateUserService } from '../AuthenticateUser.service';
import { Statut } from '../Statut.enum';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  private _da: Da;
  private id: number;
  private _clients: Client[];
  private _cdps: Cdp[];
  private _specialistes: Specialiste[];
  private _correspondants: Correspondant[];
  private _pilote_das: Pilote_Da[];

  constructor(private daService: DaService, private router: Router, private userService: UserService, public auth: AuthenticateUserService) { }


  ngOnInit() {
    this.auth.canActivate();
    this.selectedDa();
    this.listClient();
    this.listCdp();
    this.listCorrespondant();
    this.listPilote_da();
    this.listSpecialiste();
  }


  public selectedDa() {
    if (this.daService.id != null) {
      this.id = this.daService.id;
      this.setDaToEdit();
      console.log('cas 1');
    }
    else {
      this._da = new Da();
      console.log(this._da);
      console.log('cas 2');
    }
  }


  public setDaToEdit() {
    if (this.id != null) {
      this.daService.findById(this.id).subscribe(res =>
        this._da = res);
    }
  }

  public annuler() {
    this.daService.id = null;
    this.router.navigate(['mesDa'])
  }

  public save() {
    if (this.da.statut == null){
      this.da.statut = Statut.Creation;
    }
    if (this.da.client == null){
      this.da.client = this.auth.token;
    }
    this.daService.save(this._da).subscribe(res =>{
      this.daService.id = null,
      this.router.navigate(['mesDa'])
    }
    );
    
  }

  public listClient() {
    this.userService.listAllClient().subscribe(res =>
      this._clients = res)
  }

  public listCorrespondant() {
    this.userService.listAllCorrespondant().subscribe(res =>
      this._correspondants = res)
  }

  public listCdp() {
    this.userService.listAllCdp().subscribe(res =>
      this._cdps = res)
  }

  public listSpecialiste() {
    this.userService.listAllSpecialiste().subscribe(res =>
      this._specialistes = res)
  }

  public listPilote_da() {
    this.userService.listAllPilote_da().subscribe(res =>
      this._pilote_das = res)
  }

  public forClient(){
    var a = true;
    this.auth.token.roles.forEach(e => {
      if (e == 'ROLE_CLIENT'|| e == 'ROLE_ADMIN' || e == 'ROLE_CDP' || e == 'ROLE_CORRESPONDANT'){
        a = false;
      }
    });
    return a;
  }

  public forCdp(){
    var a = true;
    this.auth.token.roles.forEach(e => {
      if (e == 'ROLE_CDP' || e == 'ROLE_ADMIN' || e == 'ROLE_CDP'){
        a = false;
      }
    });
    return a;
  }
  public forCorrespondant(){
    var a = true;
    this.auth.token.roles.forEach(e => {
      if (e == 'ROLE_CORRESPONDANT' || e == 'ROLE_ADMIN' || e == 'ROLE_CDP'){
        a = false;
      }
    });
    return a;
  }

  public forSpecialiste(){
    var a = true;
    this.auth.token.roles.forEach(e => {
      if (e == 'ROLE_SPECIALISTE' || e == 'ROLE_ADMIN' || e == 'ROLE_CDP'){
        a = false;
      }
    });
    return a;
  }

  public forPilote_da(){
    var a = true;
    this.auth.token.roles.forEach(e => {
      if (e == 'ROLE_PILOTEDA' || e == 'ROLE_ADMIN' || e == 'ROLE_CDP'){
        a = false;
      }
    });
    return a;
  }

  public forAdmin(){
    var a = true;
    this.auth.token.roles.forEach(e => {
      if (e == 'ROLE_ADMIN'){
        a = false;
      }
    });
    return a;
  }

  public goToCreation(){
    this._da.statut = Statut.Creation;
    this.save();
  }

  public goToVerification_1(){
    this._da.client = this.auth.token;
    this._da.statut = Statut.Verification_1;
    this.save();
  }

  public goBackToVerification_1(){
    this._da.statut = Statut.Verification_1;
    this.save();
  }

  public goToValidation_1(){
    this._da.statut = Statut.Validation_1;
    this.save();
  }

  public goToVerification_2(){
    this._da.statut = Statut.Verification_2;
    this.save();
  }

  public goToValidation_2(){
    this._da.statut = Statut.Validation_2;
    this.save();
  }

 public goToTerminee() {
  this._da.statut = Statut.Terminee;
  this.save();
 }

  get da(): Da {
    return this._da;
  }

  set da(da: Da) {
    this._da = da;
  }

  get clients(): Client[] {
    return this._clients;
  }

  set clients(value: Client[]) {
    this._clients = value;
  }

  get correspondants(): Correspondant[] {
    return this._correspondants;
  }

  set correspondants(value: Correspondant[]) {
    this._correspondants = value;
  }

  get specialistes(): Specialiste[] {
    return this._specialistes;
  }

  set specialistes(value: Specialiste[]) {
    this._specialistes = value;
  }

  get cdps(): Cdp[] {
    return this._cdps;
  }

  set cdps(value: Cdp[]) {
    this._cdps = value;
  }

  get pilote_das(): Pilote_Da[] {
    return this._pilote_das;
  }

  set pilote_das(value: Pilote_Da[]) {
    this._pilote_das = value;
  }


  // get selectedClient(): Client {
  //   return this._selectedClient;
  // }

  // set selectedClient(selectedClient: Client) {
  //   this._selectedClient = selectedClient;
  // }

}
