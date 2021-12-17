import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GreenStockService } from '../greenstock.service';
import { Identifiant } from '../identifiant';
import { Utilisateur } from '../utilisateur';

@Component({
  selector: 'app-form-connexion',
  templateUrl: './form-connexion.component.html',
  styleUrls: ['./form-connexion.component.css']
})
export class FormConnexionComponent implements OnInit {

  modelIdentifiant: Identifiant = {
    courriel: "",
    mot_de_passe: ""
  }
  erreur_alerte: string = ""
  succes_alerte: string = ""

  constructor(private greenStockService: GreenStockService, private router: Router) { }

  ngOnInit(): void {
  }

  connexion(utilisateurFormConnexion: NgForm) {
    if (utilisateurFormConnexion.valid) {
      this.greenStockService.connexion(this.modelIdentifiant).subscribe(response => {
        this.erreur_alerte = ""
        this.succes_alerte = response.message
        localStorage.setItem("token", response.token)
        this.router.navigate(['/'])
      }, err => {
        if (err.status === 400) {
          this.erreur_alerte = "Vos identifiants ne concordent pas.";
        }
        else {
          this.erreur_alerte = "Une erreur est survenue avec le serveur de connexion, veuillez réessayer plus tard.";
        }
      })
    }
  }
}
