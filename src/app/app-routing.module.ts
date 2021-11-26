import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ExercicesComponent} from './exercices.component';
import {HeaderComponent} from './header.component';
import {AccueilComponent} from './accueil.component';
import {LoginComponent} from './login.component';
import {DocinfoComponent} from './docinfo.component';
import {ContactpatientComponent} from './contactpatient.component';

const routes: Routes = [
{path: 'contactpatient',
component: ContactpatientComponent},

  
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers : [],
})
export class AppRoutingModule { }
