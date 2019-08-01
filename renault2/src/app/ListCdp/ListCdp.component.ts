import { Component, OnInit } from '@angular/core';
import { UserService } from '../User.service';
import { Cdp } from '../Cdp';

@Component({
  selector: 'app-ListCdp',
  templateUrl: './ListCdp.component.html',
  styleUrls: ['./ListCdp.component.css']
})
export class ListCdpComponent implements OnInit {

  private _cdps: Cdp[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.listCdp();
  }

  public listCdp() {
    this.userService.listAllCdp().subscribe(res =>
      this._cdps = res)
  }

  public selectedCdp(cdp: Cdp){
    this.userService.selectedCdp = cdp;
  }

  get cdps(): Cdp[] {
    return this._cdps;
  }

  set cdps(value: Cdp[]) {
    this._cdps = value;
  }

}
