import { Component, OnInit } from '@angular/core';
import { Pilote_Da } from '../Pilote_Da';
import { UserService } from '../User.service';
import { Router } from '@angular/router';
import { AuthenticateUserService } from '../AuthenticateUser.service';
import { Roles } from '../Roles.enum';

@Component({
  selector: 'app-EditPilote_da',
  templateUrl: './EditPilote_da.component.html',
  styleUrls: ['./EditPilote_da.component.css']
})
export class EditPilote_daComponent implements OnInit {

  private _pilote_da: Pilote_Da;
  private _selectedRole: Roles;

  constructor(private userService: UserService, private router: Router, private auth: AuthenticateUserService) { }

  ngOnInit() {
    this.auth.adminCanActivate();
    this.selectedPilote_da();
  }

  public selectedPilote_da(){
    if (this.userService.selectedPilote_da != null){
      this._pilote_da = this.userService.selectedPilote_da;
      console.log("positionnement pilote_da");
    }
    else {
      console.log('creation new pilote_da')
      this._pilote_da = new Pilote_Da();
    }
  }

  public save(){
    console.log(this._pilote_da)
    this.userService.savePilote_da(this._pilote_da).subscribe(res=>{
      this._pilote_da = null,
      this.userService.selectedPilote_da = null,
      this.router.navigate(['listPilote_da']); }
      );
  }

  public annuler() {
    this.userService.selectedPilote_da = null;
    this.router.navigate(['home'])
  }

  get pilote_da(): Pilote_Da {
    return this._pilote_da;
  }
  
  set pilote_da(pilote_da: Pilote_Da) {
    this._pilote_da = pilote_da;
  }

  get selectedRole(): Roles {
    return this._selectedRole;
  }
  
  set selectedRole(selectedRole: Roles) {
    this._selectedRole = selectedRole;
  }

  public addRole(){
    this._pilote_da.roles.push(this._selectedRole);

  }

  public deleteRole(){
    this._pilote_da.roles = new Array;
  }


}
