import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Action } from '../action';
import { GreenStockService } from '../greenstock.service';

@Component({
  selector: 'app-page-action',
  templateUrl: './page-action.component.html',
  styleUrls: ['./page-action.component.css']
})
export class PageActionComponent implements OnInit {

  id: string = "";
  action?: Action

  constructor(private route: ActivatedRoute, private greenStockService: GreenStockService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id']
      this.greenStockService.obtenirActionParId(this.id).subscribe(response => {
        this.action = response
      }, err => {
      })
    });
  }

}
