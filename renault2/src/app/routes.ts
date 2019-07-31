import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './List/List.component';
import { EditComponent } from './edit/edit.component';
import { ListClientComponent } from './ListClient/ListClient.component';
import { ListCorrespondantComponent } from './ListCorrespondant/ListCorrespondant.component';
import { ListSpecialisteComponent } from './ListSpecialiste/ListSpecialiste.component';
import { ListCdpComponent } from './ListCdp/ListCdp.component';
import { ListPilote_daComponent } from './ListPilote_da/ListPilote_da.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent},
  {path: 'list_da', component: ListComponent},
  {path: 'edit', component: EditComponent},
  {path: 'listClient', component: ListClientComponent},
  {path: 'listCorrespondant', component: ListCorrespondantComponent},
  {path: 'listSpecialiste', component: ListSpecialisteComponent},
  {path: 'listCdp', component: ListCdpComponent},
  {path: 'listPilote_da', component: ListPilote_daComponent}
];

