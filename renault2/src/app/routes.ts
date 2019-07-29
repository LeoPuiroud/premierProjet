import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './List/List.component';
import { EditComponent } from './edit/edit.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent},
  {path: 'list', component: ListComponent},
  {path: 'edit', component: EditComponent}
];

