import { Component, OnInit } from '@angular/core';
import { Specialiste } from '../Specialiste';
import { UserService } from '../User.service';

@Component({
  selector: 'app-ListSpecialiste',
  templateUrl: './ListSpecialiste.component.html',
  styleUrls: ['./ListSpecialiste.component.css']
})
export class ListSpecialisteComponent implements OnInit {

  private _specialistes: Specialiste[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.listSpecialiste();
  }

  public listSpecialiste() {
    this.userService.listAllSpecialiste().subscribe(res =>
      this._specialistes = res)
  }

  get specialistes(): Specialiste[] {
    return this._specialistes;
  }

  set specialistes(value: Specialiste[]) {
    this._specialistes = value;
  }

}
