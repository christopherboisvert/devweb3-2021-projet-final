import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pied-page',
  templateUrl: './pied-page.component.html',
  styleUrls: ['./pied-page.component.css']
})
export class PiedPageComponent implements OnInit {

  date: Date = new Date()

  constructor() { }

  ngOnInit(): void {
  }

}
