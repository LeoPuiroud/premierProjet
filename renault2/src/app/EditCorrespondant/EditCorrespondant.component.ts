import { Component, OnInit } from '@angular/core';
import { UserService } from '../User.service';
import { Router } from '@angular/router';
import { Correspondant } from '../Correspondant';

@Component({
  selector: 'app-EditCorrespondant',
  templateUrl: './EditCorrespondant.component.html',
  styleUrls: ['./EditCorrespondant.component.css']
})
export class EditCorrespondantComponent implements OnInit {

private _correspondant: Correspondant;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
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
    this.userService.saveCorrespondant(this._correspondant).subscribe(res=>
      this._correspondant = null
      );
      this.router.navigate(['home'])
    }

  get correspondant(): Correspondant {
    return this._correspondant;
  }
  
  set correspondant(correspondant: Correspondant) {
    this._correspondant = correspondant;
  }

}
