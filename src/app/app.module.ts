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
import { GreenStockService } from './greenstock.service';
import { NavigationComponent } from './navigation/navigation.component';
import { PageAjouterActionComponent } from './page-ajouter-action/page-ajouter-action.component';
import { PageAjouterPortfolioComponent } from './page-ajouter-portfolio/page-ajouter-portfolio.component';
import { ActionCardComponent } from './action-card/action-card.component';
import { ListeActionComponent } from './liste-action/liste-action.component';
import { PageNonTrouveComponent } from './page-non-trouve/page-non-trouve.component';
import { PageActionComponent } from './page-action/page-action.component';
import { PiedPageComponent } from './pied-page/pied-page.component';
import { DiagrammeLigneComponent } from './diagramme-ligne/diagramme-ligne.component';
import { FormStockComponent } from './form-stock/form-stock.component';

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
    NavigationComponent,
    PageAjouterActionComponent,
    PageAjouterPortfolioComponent,
    ActionCardComponent,
    ListeActionComponent,
    PageNonTrouveComponent,
    PageActionComponent,
    DiagrammeLigneComponent,
    FormStockComponent
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
