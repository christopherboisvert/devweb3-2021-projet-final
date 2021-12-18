import { Component, OnInit } from '@angular/core';
import { Action } from '../action';
import { GreenStockService } from '../greenstock.service';

@Component({
  selector: 'app-liste-action',
  templateUrl: './liste-action.component.html',
  styleUrls: ['./liste-action.component.css']
})
export class ListeActionComponent implements OnInit {

  actions: Action[] = []
  erreur_alerte:string = ""

  constructor(private greenStockService: GreenStockService) { }

  ngOnInit(): void {
    this.greenStockService.obtenirTousLesActions().subscribe(response => {
      this.erreur_alerte = ""
      this.actions = response
    }, err => {
      this.erreur_alerte = "Aucune action à afficher !"
    })
  }

}
