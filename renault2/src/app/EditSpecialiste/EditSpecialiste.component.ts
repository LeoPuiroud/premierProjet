import { Component, OnInit } from '@angular/core';
import { Specialiste } from '../Specialiste';
import { UserService } from '../User.service';
import { Router } from '@angular/router';
import { AuthenticateUserService } from '../AuthenticateUser.service';
import { Roles } from '../Roles.enum';

@Component({
  selector: 'app-EditSpecialiste',
  templateUrl: './EditSpecialiste.component.html',
  styleUrls: ['./EditSpecialiste.component.css']
})
export class EditSpecialisteComponent implements OnInit {

  private _specialiste: Specialiste;
  private _selectedRole: Roles;

  constructor(private userService: UserService, private router: Router, private auth: AuthenticateUserService) { }

  ngOnInit() {
    this.auth.adminCanActivate();
    this.selectedSpecialiste();
  }

  public selectedSpecialiste(){
    if (this.userService.selectedSpecialiste != null){
      this._specialiste = this.userService.selectedSpecialiste;
      console.log("positionnement specialiste");
    }
    else {
      console.log('creation new specialiste')
      this._specialiste = new Specialiste();
    }
  }


  public save() {
    console.log(this._specialiste)
    this.userService.saveSpecialiste(this._specialiste).subscribe(res=>
      this._specialiste = null,
      this.userService.selectedSpecialiste = null
      );
      this.router.navigate(['home'])
    }

    public annuler() {
      this.userService.selectedSpecialiste = null
      this.router.navigate(['home'])
    }

  get specialiste(): Specialiste {
    return this._specialiste;
  }
  
  set specialiste(specialiste: Specialiste) {
    this._specialiste = specialiste;
  }

  get selectedRole(): Roles {
    return this._selectedRole;
  }
  
  set selectedRole(selectedRole: Roles) {
    this._selectedRole = selectedRole;
  }

  public addRole(){
    this._specialiste.roles.push(this._selectedRole);

  }

  public deleteRole(){
    this._specialiste.roles = new Array;
  }

}
