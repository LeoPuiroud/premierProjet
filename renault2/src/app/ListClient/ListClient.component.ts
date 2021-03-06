import { Component, OnInit } from '@angular/core';
import { UserService } from '../User.service';
import { Router } from '@angular/router';
import { Client } from '../Client';
import { AuthenticateUserService } from '../AuthenticateUser.service';

@Component({
  selector: 'app-ListClient',
  templateUrl: './ListClient.component.html',
  styleUrls: ['./ListClient.component.css']
})
export class ListClientComponent implements OnInit {

  private clients: Client[];

  constructor(private userService: UserService, private router: Router,private auth: AuthenticateUserService) { }

  ngOnInit() {
    console.log(this.auth.adminToken);
    this.auth.canActivate();
    this.listClient();
  }

  public listClient() {
    this.userService.listAllClient().subscribe(res =>
      this.clients = res)
  }

  public selectedClient(client: Client){
    this.userService.selectedClient = client;
  }

  get getClients(): Client[]{
    return this.clients;
  }

  
}
