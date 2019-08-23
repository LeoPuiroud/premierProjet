import { Component, OnInit } from '@angular/core';
import { AuthenticateUserService } from '../AuthenticateUser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-AuthenticationNeeded',
  templateUrl: './AuthenticationNeeded.component.html',
  styleUrls: ['./AuthenticationNeeded.component.css']
})
export class AuthenticationNeededComponent implements OnInit {

  constructor(public auth: AuthenticateUserService, private router: Router) { }

  ngOnInit() {
  }

}
