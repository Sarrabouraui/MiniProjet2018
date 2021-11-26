import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SidebarModule } from 'ng-sidebar';

import {Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AccueilComponent } from './accueil.component';
import { HeaderComponent} from './header.component';
import { ExercicesComponent } from './exercices.component';
import { LoginComponent } from './login.component';
import { DocinfoComponent } from './docinfo.component';
import { ContactmedComponent } from './contactmed.component';
import { ContactpatientComponent } from './contactpatient.component';
import { Header2Component } from './header2.component';
import { PatientinfoComponent } from './patientinfo.component';
import { Login2Component } from './login2.component';
import { AjoutexerciceComponent } from './ajoutexercice.component';
import { Login3Component } from './login3.component';
import { Header3Component } from './header3.component';
import { Docinfo3Component } from './docinfo3.component';
import { Patientinfo3Component } from './patientinfo3.component';
import { Exercices2Component } from './exercices2.component';
import { Patientinfo2Component } from './patientinfo2.component';
import { PressionplantaireComponent } from './pressionplantaire.component';
import { DistanceComponent } from './distance.component';
import { VitesseComponent } from './vitesse.component';
import { RythmeComponent } from './rythme.component';
import { NbpasComponent } from './nbpas.component';
import { CadenceComponent } from './cadence.component';
import { CaloriesComponent } from './calories.component';
import { ModifpatientComponent } from './modifpatient.component';
import { ProfiladminComponent } from './profiladmin.component';
import { ProfilpatComponent } from './profilpat.component';
import { ProfilmedComponent } from './profilmed.component';
import { MenumenuComponent } from './menumenu.component';



const routes : Routes = [
  {path :'accueil' , component :  AccueilComponent},
  
  {path :'menumenu' , component :  MenumenuComponent},
  {path :'' , component :  MenumenuComponent},
  {path :'login' , component :  LoginComponent},
  {path :'login2' , component :  Login2Component},
  {path :'login3' , component :  Login3Component},

  /*{path :'header' , component : HeaderComponent},*/
  {path :'exercices' , component :  ExercicesComponent},  
  {path :'docinfo' , component :  DocinfoComponent},


  {path :'exercices2' , component :  Exercices2Component},
  {path :'header2' , component : Header2Component},
  {path :'ajoutexercice' , component :  AjoutexerciceComponent},
  {path :'exercice2' , component : Exercices2Component},
  {path :'patientinfo2' , component : Patientinfo2Component},

  
  {path :'header3' , component : Header3Component},
  {path :'patientinfo3' , component :  Patientinfo3Component},
  {path :'docinfo3' , component : Docinfo3Component},
  {path :'modifpatient' , component : ModifpatientComponent},

  {path :'contactpatient' , component : ContactpatientComponent},
  {path :'contactmed' , component : ContactmedComponent},

  {path : 'pressionplantaire' , component : PressionplantaireComponent},
  {path : 'cadence' , component : CadenceComponent},
  {path : 'calories' , component : CaloriesComponent},
  {path : 'distance' , component : DistanceComponent},
  {path : 'nbpas' , component : NbpasComponent},
  {path : 'vitesse' , component : VitesseComponent},
  {path : 'rythme' , component : RythmeComponent},

  {path : 'profilmed' , component : ProfilmedComponent},
  {path : 'profilpat' , component : ProfilpatComponent},
  {path : 'profiladmin' , component : ProfiladminComponent},
]


@NgModule({
  declarations: [
    AppComponent,AccueilComponent,
    HeaderComponent,
    ExercicesComponent,
    LoginComponent,
    DocinfoComponent,
    ContactmedComponent,
    ContactpatientComponent,
    Header2Component,
    PatientinfoComponent,
    Login2Component,
    AjoutexerciceComponent,
    Login3Component,
    Header3Component,
    Docinfo3Component,
    Patientinfo3Component,
    Exercices2Component,
    Patientinfo2Component,
    PressionplantaireComponent,
    DistanceComponent,
    VitesseComponent,
    RythmeComponent,
    NbpasComponent,
    CadenceComponent,
    CaloriesComponent,
    ModifpatientComponent,
    ProfiladminComponent,
    ProfilpatComponent,
    ProfilmedComponent,
    MenumenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    SidebarModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
