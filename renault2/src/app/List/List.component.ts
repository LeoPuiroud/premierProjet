import { Component, OnInit } from '@angular/core';
import { Da } from '../Da';
import { DaService } from '../da.service';
import { EditComponent } from '../edit/edit.component';
import { Router } from '@angular/router';
import { AuthenticateUserService } from '../AuthenticateUser.service';

@Component({
  selector: 'app-List',
  templateUrl: './List.component.html',
  styleUrls: ['./List.component.css']
})
export class ListComponent implements OnInit {

  public das: Da[];

  constructor(private daService: DaService, private router: Router, private auth: AuthenticateUserService) { }


  ngOnInit() {
    this.auth.adminCanActivate();
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

        public delete(id: number) {
          this.daService.delete(id).subscribe(res=>
            this.router.navigate(['/home'])
            );
        }

}
