import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { PageAjouterActionComponent } from './page-ajouter-action/page-ajouter-action.component';
import { PageAjouterPortfolioComponent } from './page-ajouter-portfolio/page-ajouter-portfolio.component';
import { PageConnexionComponent } from './page-connexion/page-connexion.component';
import { PageInscriptionComponent } from './page-inscription/page-inscription.component';

const routes: Routes = [
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
    path: "", component: PageAccueilComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
