import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { PageActionComponent } from './page-action/page-action.component';
import { PageAjouterActionComponent } from './page-ajouter-action/page-ajouter-action.component';
import { PageAjouterPortfolioComponent } from './page-ajouter-portfolio/page-ajouter-portfolio.component';
import { PageConnexionComponent } from './page-connexion/page-connexion.component';
import { PageInscriptionComponent } from './page-inscription/page-inscription.component';
import { PageNonTrouveComponent } from './page-non-trouve/page-non-trouve.component';

const routes: Routes = [
  {
    path: "", component: PageAccueilComponent,
  },
  {
    path: "se-connecter", component: PageConnexionComponent,
  },
  {
    path: "inscription", component: PageInscriptionComponent,
  },
  {
    path: "ajouter-action", component: PageAjouterActionComponent,
  },
  {
    path: "ajouter-portfolio", component: PageAjouterPortfolioComponent,
  },
  {
    path: "action/:id", component: PageActionComponent,
  },
  {
    path: "**", component: PageNonTrouveComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
