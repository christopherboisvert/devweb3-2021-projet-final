import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageConnexionComponent } from './page-connexion/page-connexion.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EnTeteComponent } from './en-tete/en-tete.component';
import { FormConnexionComponent } from './form-connexion/form-connexion.component';
import { TitrePageComponent } from './titre-page/titre-page.component';
import { PageInscriptionComponent } from './page-inscription/page-inscription.component';
import { FormInscriptionComponent } from './form-inscription/form-inscription.component';
import { PiedPageComponent } from './pied-page/pied-page.component';
import { GreenStockService } from './greenstock.service';
import { DiagrammeCirculaireComponent } from './diagramme-circulaire/diagramme-circulaire.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PageAjouterActionComponent } from './page-ajouter-action/page-ajouter-action.component';
import { PageAjouterPortfolioComponent } from './page-ajouter-portfolio/page-ajouter-portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    PageConnexionComponent,
    PageAccueilComponent,
    EnTeteComponent,
    FormConnexionComponent,
    TitrePageComponent,
    PageInscriptionComponent,
    FormInscriptionComponent,
    PiedPageComponent,
    DiagrammeCirculaireComponent,
    NavigationComponent,
    PageAjouterActionComponent,
    PageAjouterPortfolioComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [GreenStockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
