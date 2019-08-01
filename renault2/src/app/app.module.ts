import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ListComponent } from './List/List.component';
import { routes } from './routes';
import { EditComponent } from './edit/edit.component';
import {FormsModule} from "@angular/forms";  
import { ListClientComponent } from './ListClient/ListClient.component';
import { ListCorrespondantComponent } from './ListCorrespondant/ListCorrespondant.component';
import { ListSpecialisteComponent } from './ListSpecialiste/ListSpecialiste.component';
import { ListCdpComponent } from './ListCdp/ListCdp.component';
import { ListPilote_daComponent } from './ListPilote_da/ListPilote_da.component';
import { EditClientComponent } from './EditClient/EditClient.component';
import { EditCdpComponent } from './EditCdp/EditCdp.component';
import { EditCorrespondantComponent } from './EditCorrespondant/EditCorrespondant.component';


@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      ListComponent,
      EditComponent,
      ListClientComponent,
      ListCorrespondantComponent,
      ListSpecialisteComponent,
      ListCdpComponent,
      ListPilote_daComponent,
      EditClientComponent,
      EditCdpComponent,
      EditCorrespondantComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(routes),
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
