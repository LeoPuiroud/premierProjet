import { Component, OnInit } from '@angular/core';
import { UserService } from '../User.service';
import { Correspondant } from '../Correspondant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ListCorrespondant',
  templateUrl: './ListCorrespondant.component.html',
  styleUrls: ['./ListCorrespondant.component.css']
})
export class ListCorrespondantComponent implements OnInit {

  private _correspondants: Correspondant[];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.listCorrespondant();
  }

  public listCorrespondant() {
    this.userService.listAllCorrespondant().subscribe(res =>
      this._correspondants = res)
  }

  get correspondants(): Correspondant[] {
    return this._correspondants;
  }

  set correspondants(value: Correspondant[]) {
    this._correspondants = value;
  }

}
