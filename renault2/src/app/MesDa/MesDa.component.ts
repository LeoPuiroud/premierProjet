import { Component, OnInit } from '@angular/core';
import { AuthenticateUserService } from '../AuthenticateUser.service';
import { DaService } from '../da.service';
import { Router } from '@angular/router';
import { Da } from '../Da';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-MesDa',
  templateUrl: './MesDa.component.html',
  styleUrls: ['./MesDa.component.css']
})
export class MesDaComponent implements OnInit {

  private _mesDa: Da[];

  constructor(private daService: DaService, private router: Router,private auth: AuthenticateUserService) { }

  ngOnInit() {
    this.auth.canActivate();
    this.list();
  }

public list() {
  this.daService.MesDa().subscribe(res=>
    this._mesDa = res) 
}

get mesDa(){
  return this._mesDa;
}

public selectedDA(id: number){
  console.log('SELECTEDDA de list component');
  this.daService.selectedDa(id);

}
}
