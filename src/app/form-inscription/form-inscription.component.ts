import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    courriel: "",
    mot_de_passe: "",
    mot_de_passe_repeter: "",
    prenom: "",
    nom: ""
  }
  mot_de_passe_invalide: boolean = false
  erreur_alerte: string = ""
  succes_alerte:string = ""

  constructor(private greenStockService: GreenStockService, private router: Router) { }

  ngOnInit(): void {
  }

  ajouterUtilisateur(utilisateurFormAjout: NgForm) {
    if (utilisateurFormAjout.valid) {
      if (this.modelUtilisateur.mot_de_passe != this.modelUtilisateur.mot_de_passe_repeter) {
        this.erreur_alerte = "Veuillez vous assurez que les mot de passe correspondent"
      }
      else {
        this.greenStockService.ajouterUtilisateur(this.modelUtilisateur).subscribe(response => {
          this.erreur_alerte = ""
          this.succes_alerte = response.message
          localStorage.setItem("token", response.token)
          this.router.navigate(['/'])
        }, err => {
          if (err.status === 400) {
            if (err.error !== undefined && err.error.exception.errors.courriel.message !== undefined) {
              this.erreur_alerte = err.error.exception.errors.courriel.message;
            }
            else if (err.error !== undefined && err.error.exception.errors.mot_de_passe.message !== undefined) {
              this.erreur_alerte = err.error.exception.errors.mot_de_passe.message;
            }
            else if (err.error !== undefined && err.error.exception.errors.prenom.message !== undefined) {
              this.erreur_alerte = err.error.exception.errors.prenom.message;
            }
            else if (err.error !== undefined && err.error.exception.errors.nom.message !== undefined) {
              this.erreur_alerte = err.error.exception.errors.nom.message;
            }
            else {
              this.erreur_alerte = "Une erreur inattendue est survenue";
            }
          }
          else {
            this.erreur_alerte = "Une erreur inattendue est survenue";
          }
        })
      }
    }
  }
}
