import { Component, OnInit, Optional } from '@angular/core';
import { Client } from '../Client';
import { UserService } from '../User.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateUserService } from '../AuthenticateUser.service';
import { Roles } from '../Roles.enum';

@Component({
  selector: 'app-EditClient',
  templateUrl: './EditClient.component.html',
  styleUrls: ['./EditClient.component.css']
})
export class EditClientComponent implements OnInit {

  private _client: Client;
  private _selectedRole: Roles;


  constructor(private userService: UserService, private router: Router, private auth: AuthenticateUserService) { }

  ngOnInit() {
    this.auth.adminCanActivate();
    this.selectedClient();
  }

  public selectedClient(){
    if (this.userService.selectedClient != null){
      this._client = this.userService.selectedClient;
      console.log("positionnement client");
    }
    else {
      console.log('creation new client')
      this._client = new Client();
    }
  }


  public save() {
    console.log(this._client)
    this.userService.saveClient(this._client).subscribe(res=>
      this._client = null,
      this.userService.selectedClient = null
      );
      this.router.navigate(['home'])
    }

    public annuler() {
      this.userService.selectedClient = null;
      this.router.navigate(['home'])
    }

  get client(): Client {
    return this._client;
  }
  
  set client(client: Client) {
    this._client = client;
  }

  get selectedRole(): Roles {
    return this._selectedRole;
  }
  
  set selectedRole(selectedRole: Roles) {
    this._selectedRole = selectedRole;
  }

  public addRole(){
    this._client.roles.push(this._selectedRole);

  }

  public deleteRole(){
    this._client.roles = new Array;
  }


}
