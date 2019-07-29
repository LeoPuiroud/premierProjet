import { Component } from '@angular/core';
import { DaService } from './da.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'renault2';

  constructor(private daService: DaService){}

  public newDa(){
    this.daService.id = null;
  }

}
