import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './List/List.component';
import { EditComponent } from './edit/edit.component';
import { ListClientComponent } from './ListClient/ListClient.component';
import { ListCorrespondantComponent } from './ListCorrespondant/ListCorrespondant.component';
import { ListSpecialisteComponent } from './ListSpecialiste/ListSpecialiste.component';
import { ListCdpComponent } from './ListCdp/ListCdp.component';
import { ListPilote_daComponent } from './ListPilote_da/ListPilote_da.component';
import { EditClientComponent } from './EditClient/EditClient.component';
import { EditCdpComponent } from './EditCdp/EditCdp.component';
import { EditCorrespondantComponent } from './EditCorrespondant/EditCorrespondant.component';
import { EditSpecialisteComponent } from './EditSpecialiste/EditSpecialiste.component';
import { EditPilote_daComponent } from './EditPilote_da/EditPilote_da.component';
import { LoginComponent } from './Login/Login.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent},
  {path: 'list_da', component: ListComponent},
  {path: 'edit', component: EditComponent},
  {path: 'listClient', component: ListClientComponent},
  {path: 'listCorrespondant', component: ListCorrespondantComponent},
  {path: 'listSpecialiste', component: ListSpecialisteComponent},
  {path: 'listCdp', component: ListCdpComponent},
  {path: 'listPilote_da', component: ListPilote_daComponent},
  {path: 'editClient', component: EditClientComponent},
  {path: 'editCdp', component: EditCdpComponent},
  {path: 'editCorrespondant', component: EditCorrespondantComponent},
  {path: 'editSpecialiste', component: EditSpecialisteComponent},
  {path: 'editPilote_da', component: EditPilote_daComponent},
  {path: 'login', component: LoginComponent}
];

