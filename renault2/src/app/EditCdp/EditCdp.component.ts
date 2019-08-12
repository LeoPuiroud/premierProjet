import { Component, OnInit } from '@angular/core';
import { Cdp } from '../Cdp';
import { UserService } from '../User.service';
import { Router } from '@angular/router';
import { AuthenticateUserService } from '../AuthenticateUser.service';
import { Roles } from '../Roles.enum';

@Component({
  selector: 'app-EditCdp',
  templateUrl: './EditCdp.component.html',
  styleUrls: ['./EditCdp.component.css']
})
export class EditCdpComponent implements OnInit {

  private _cdp: Cdp;
  private _selectedRole: Roles;

  constructor(private userService: UserService, private router: Router, private auth: AuthenticateUserService) { }

  ngOnInit() {
    this.auth.adminCanActivate();
    this.selectedCdp();
  }

  public selectedCdp(){
    if (this.userService.selectedCdp != null){
      this._cdp = this.userService.selectedCdp;
      console.log("positionnement cdp");
    }
    else {
      console.log('creation new cdp')
      this._cdp = new Cdp();
    }
  }

  public save(){
    console.log(this._cdp)
    this.userService.saveCdp(this._cdp).subscribe(res=>{
      this._cdp = null,
      this.userService.selectedCdp = null,
      this.router.navigate(['listCdp']);
    }
      );
      
  }

  public annuler() {
    this.userService.selectedCdp = null;
    this.router.navigate(['home'])
  }

  get cdp(): Cdp {
    return this._cdp;
  }
  
  set cdp(cdp: Cdp) {
    this._cdp = cdp;
  }

  get selectedRole(): Roles {
    return this._selectedRole;
  }
  
  set selectedRole(selectedRole: Roles) {
    this._selectedRole = selectedRole;
  }

  public addRole(){
    this._cdp.roles.push(this._selectedRole);

  }

  public deleteRole(){
    this._cdp.roles = new Array;
  }

}
