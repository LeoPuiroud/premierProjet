import { Component, OnInit } from '@angular/core';
import { Da } from '../Da';
import { DaService } from '../da.service';
import { AuthenticateUserService } from '../AuthenticateUser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-DaLibre',
  templateUrl: './DaLibre.component.html',
  styleUrls: ['./DaLibre.component.css']
})
export class DaLibreComponent implements OnInit {

  constructor(private daService: DaService, public auth: AuthenticateUserService, private router: Router) { }

  ngOnInit() {
    this.list();
  }

  public das: Da[];

  public list() {
    this.daService.listAllDa().subscribe(res =>
      this.das = res)
  }

  public daCorrespondant(da: Da) {
    da.correspondant = this.auth.token;
    this.daService.save(da).subscribe(res => {
      this.router.navigate(['mesDa'])
    })
  }

  public daCdp(da: Da) {
    da.cdp = this.auth.token;
    this.daService.save(da).subscribe(res => {
      this.router.navigate(['mesDa'])
    })
  }

  public daSpecialiste(da: Da) {
    da.specialiste = this.auth.token;
    this.daService.save(da).subscribe(res => {
      this.router.navigate(['mesDa'])
    })
  }

  public daPilote_da(da: Da) {
    da.pilote_da = this.auth.token;
    this.daService.save(da).subscribe(res => {
      this.router.navigate(['mesDa'])
    })
  }

}
