import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GreenStockService } from '../greenstock.service';
import { Utilisateur } from '../utilisateur';

@Component({
  selector: 'app-form-inscription',
  templateUrl: './form-inscription.component.html',
  styleUrls: ['./form-inscription.component.css']
})
export class FormInscriptionComponent implements OnInit {

  modelUtilisateur: Utilisateur = {
    courriel: "test@test.com",
    motDePasse: "",
    prenom: "",
    nom: ""
  }

  constructor(private greenStockService: GreenStockService) { }

  ngOnInit(): void {
  }

  ajouterUtilisateur(utilisateurFormAjout: NgForm) {
    if (utilisateurFormAjout.valid) {
      console.log("Le formulaire est valide !")
      this.greenStockService.ajouterUtilisateur(this.modelUtilisateur).subscribe(resultat => console.log(resultat))
    }
    else {
      console.log("Le formulaire est invalide !")
    }
  }

}
