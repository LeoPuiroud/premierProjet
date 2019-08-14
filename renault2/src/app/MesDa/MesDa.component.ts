import { Component, OnInit } from '@angular/core';
import { AuthenticateUserService } from '../AuthenticateUser.service';
import { DaService } from '../da.service';
import { Router } from '@angular/router';
import { Da } from '../Da';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Statut } from '../Statut.enum';

@Component({
  selector: 'app-MesDa',
  templateUrl: './MesDa.component.html',
  styleUrls: ['./MesDa.component.css']
})
export class MesDaComponent implements OnInit {

  private _mesDa: Da[];

  constructor(private daService: DaService, private router: Router, public auth: AuthenticateUserService) { }

  ngOnInit() {
    this.auth.canActivate();
    this.list();
  }

  public list() {
    this.daService.MesDa().subscribe((res =>
      this._mesDa = res),
      (err => this._mesDa = null))
  }

  get mesDa() {
    return this._mesDa;
  }

  public selectedDA(id: number) {
    console.log('SELECTEDDA de list component');
    this.daService.selectedDa(id);

  }
  public renvoyerCreation(da: Da) {
    da.renvoyer = Statut.Creation;
    this.daService.save(da).subscribe(res=>{
      this.router.navigate(['/mesDa'])
    })
  }

  public renvoyerValidation_1(da: Da) {
    da.renvoyer = Statut.Validation_1;
    this.daService.save(da).subscribe(res=>{
      this.router.navigate(['/mesDa'])
    })
  }

  public renvoyerValidation_2(da: Da) {
    da.renvoyer = Statut.Validation_2;
    this.daService.save(da).subscribe(res=>{
      this.router.navigate(['/mesDa'])
    })
  }

  public renvoyerVerification_1(da: Da) {
    da.renvoyer = Statut.Verification_1;
    this.daService.save(da).subscribe(res=>{
      this.router.navigate(['/mesDa'])
    })
  }

  public renvoyerVerification_2(da: Da) {
    da.renvoyer = Statut.Verification_2;
    this.daService.save(da).subscribe(res=>{
      this.router.navigate(['/mesDa'])
    })
  }

  public retourEtape(da: Da) {
da.statut = da.renvoyer;
da.renvoyer = null;
console.log(da.renvoyer);
this.daService.save(da).subscribe(res=>{
  this.router.navigate(['/mesDa'])
})
  }

  public refuserRetour(da: Da){
    da.renvoyer = null;
    console.log(da.renvoyer);
    this.daService.save(da).subscribe(res=>{
      this.router.navigate(['/mesDa'])
    })
  }

}
