import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titre-page',
  templateUrl: './titre-page.component.html',
  styleUrls: ['./titre-page.component.css']
})
export class TitrePageComponent implements OnInit {

  @Input() titrePage?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
