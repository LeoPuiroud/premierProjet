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


@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      ListComponent,
      EditComponent,
      
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(routes),
      FormsModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
