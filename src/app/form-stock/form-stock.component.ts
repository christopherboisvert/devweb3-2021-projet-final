import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Action } from '../action';

@Component({
  selector: 'app-form-stock',
  templateUrl: './form-stock.component.html',
  styleUrls: ['./form-stock.component.css']
})
export class FormStockComponent implements OnInit {

  nomStock:string = ""
  erreur_alerte: string = ""
  succes_alerte: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  rechercherStock(rechercherStockForm: NgForm) {

  }

}
