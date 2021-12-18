import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Action } from '../action';
Chart.register(...registerables);


@Component({
  selector: 'app-diagramme-ligne',
  templateUrl: './diagramme-ligne.component.html',
  styleUrls: ['./diagramme-ligne.component.css']
})
export class DiagrammeLigneComponent implements OnInit {

  @ViewChild("myChart") myChart?: ElementRef<HTMLCanvasElement>
  chart?: Chart
  @Input() action?: Action

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    let listePrix: number[] = this.action?.historique_valeur.map(point_achat => point_achat.prix) ? this.action?.historique_valeur.map(point_achat => point_achat.prix) : []
    let ctx = this.myChart?.nativeElement
    if (ctx) {
      this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.action?.historique_valeur.map(point_achat => new Date(point_achat?.date).toLocaleString()),
          datasets: [{
            label: '# Valeur du stock',
            data: listePrix,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }
}
