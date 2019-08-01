import { Component, OnInit, Optional } from '@angular/core';
import { Client } from '../Client';
import { UserService } from '../User.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-EditClient',
  templateUrl: './EditClient.component.html',
  styleUrls: ['./EditClient.component.css']
})
export class EditClientComponent implements OnInit {

  private _client: Client;


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
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
      this._client = null
      );
      this.router.navigate(['home'])
    }

  get client(): Client {
    return this._client;
  }
  
  set client(client: Client) {
    this._client = client;
  }


}
