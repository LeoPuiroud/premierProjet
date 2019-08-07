import { Component, OnInit } from '@angular/core';
import { UserService } from '../User.service';
import { Pilote_Da } from '../Pilote_Da';
import { AuthenticateUserService } from '../AuthenticateUser.service';

@Component({
  selector: 'app-ListPilote_da',
  templateUrl: './ListPilote_da.component.html',
  styleUrls: ['./ListPilote_da.component.css']
})
export class ListPilote_daComponent implements OnInit {

  private _pilote_das: Pilote_Da[];

  constructor(private userService: UserService, private auth: AuthenticateUserService) { }

  ngOnInit() {
    this.auth.canActivate();
    this.listPilote_da();
  }

  public listPilote_da() {
    this.userService.listAllPilote_da().subscribe(res =>
      this._pilote_das = res)
  }

  public selectedPilote_da(pilote_da: Pilote_Da){
    this.userService.selectedPilote_da = pilote_da;
  }

  get pilote_das(): Pilote_Da[] {
    return this._pilote_das;
  }

  set pilote_das(value: Pilote_Da[]) {
    this._pilote_das = value;
  }

}
