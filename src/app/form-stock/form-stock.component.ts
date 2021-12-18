import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Action } from '../action';
import { GreenStockService } from '../greenstock.service';

@Component({
  selector: 'app-form-stock',
  templateUrl: './form-stock.component.html',
  styleUrls: ['./form-stock.component.css']
})
export class FormStockComponent implements OnInit {

  nomStock:string = ""
  erreur_alerte: string = ""
  succes_alerte: string = ""

  constructor(private greenStockService: GreenStockService, private router: Router) { }

  ngOnInit(): void {
  }

  rechercherStock(rechercherStockForm: NgForm) {
    if (rechercherStockForm.valid) {
      console.log(this.nomStock)
      this.greenStockService.obtenirActionParId(this.nomStock).subscribe(response => {
        this.erreur_alerte = ""
        this.succes_alerte = response.message
        this.router.navigate(['/'])
      }, err => {
        if (err.status === 404) {
          this.erreur_alerte = "Ce stock n'existe pas !";
        }
        else {
          this.erreur_alerte = "Une erreur est survenue lors de la tentative de recherche de stock.";
        }
      })
    }
  }

}
