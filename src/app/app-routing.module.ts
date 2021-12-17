import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
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
    path: "", component: PageAccueilComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
