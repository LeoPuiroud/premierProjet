import { Component, OnInit } from '@angular/core';
import { Da } from '../Da';
import { DaService } from '../da.service';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-List',
  templateUrl: './List.component.html',
  styleUrls: ['./List.component.css']
})
export class ListComponent implements OnInit {

  public das: Da[];

  constructor(private daService: DaService) { }


  ngOnInit() {
    this.list();
  }

public selectedDA(id: number){
  console.log('SELECTEDDA de list component');
  this.daService.selectedDa(id);
  
}

  public list(){
    this.daService.listAllDa().subscribe(res=> 
      this.das = res)
        }

}
