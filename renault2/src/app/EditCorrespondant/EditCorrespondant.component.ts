import { Component, OnInit } from '@angular/core';
import { UserService } from '../User.service';
import { Router } from '@angular/router';
import { Correspondant } from '../Correspondant';
import { AuthenticateUserService } from '../AuthenticateUser.service';
import { Roles } from '../Roles.enum';

@Component({
  selector: 'app-EditCorrespondant',
  templateUrl: './EditCorrespondant.component.html',
  styleUrls: ['./EditCorrespondant.component.css']
})
export class EditCorrespondantComponent implements OnInit {

private _correspondant: Correspondant;
private _selectedRole: Roles;

  constructor(private userService: UserService, private router: Router, private auth: AuthenticateUserService) { }

  ngOnInit() {
    this.auth.adminCanActivate();
    this.selectedCorrespondant();
  }

  public selectedCorrespondant(){
    if (this.userService.selectedCorrespondant != null){
      this._correspondant = this.userService.selectedCorrespondant;
      console.log("positionnement correspondant");
    }
    else {
      console.log('creation new correspondant')
      this._correspondant = new Correspondant();
    }
  }


  public save() {
    console.log(this._correspondant)
    this.userService.saveCorrespondant(this._correspondant).subscribe(res=>{
      this._correspondant = null,
      this.userService.selectedCorrespondant = null,
      this.router.navigate(['listCorrespondant'])}
      );
    }

    public annuler() {
      this.userService.selectedCorrespondant = null;
      this.router.navigate(['home'])
    }

  get correspondant(): Correspondant {
    return this._correspondant;
  }
  
  set correspondant(correspondant: Correspondant) {
    this._correspondant = correspondant;
  }

  get selectedRole(): Roles {
    return this._selectedRole;
  }
  
  set selectedRole(selectedRole: Roles) {
    this._selectedRole = selectedRole;
  }

  public addRole(){
    this._correspondant.roles.push(this._selectedRole);

  }

  public deleteRole(){
    this._correspondant.roles = new Array;
  }

}
