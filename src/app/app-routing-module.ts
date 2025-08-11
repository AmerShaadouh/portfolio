import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home'; 
import { Kontakt } from './kontakt/kontakt';
import { UeberMich } from './ueber-mich/ueber-mich';
import { Projekte } from './projekte/projekte';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'kontakt', component: Kontakt },
  { path: 'ueber-mich', component: UeberMich },
  { path: 'projekte', component: Projekte } ,
  { path: '**', redirectTo: '' }                        
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
