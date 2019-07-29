
import { Component, OnInit, Input } from '@angular/core';
import { Da } from '../Da';
import { DaService } from '../da.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  private _da: Da;
  private id: number;

  constructor(private daService: DaService) { }


  ngOnInit() {
    this.selectedDa();
  }


public selectedDa(){

  if (this.daService.id != null){
  this.id = this.daService.id
  this.setDaToEdit();
  console.log('cas 1');
}
else {
  this._da = new Da();
  console.log(this._da)
  console.log('cas 2');
}
}

  public setDaToEdit() {
    if (this.id != null){
this.daService.findById(this.id).subscribe(res=>
  this._da=res);
}
    }

  public save(){
  console.log('enregistré save edit component')
this.daService.save(this._da).subscribe(res=>
  this._da = null
  );

  }

  get da(): Da {
    return this._da;
  }

  set da(da: Da) {
    this._da = da;
  }


}
