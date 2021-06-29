import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {

  statistique = "1300";
  statistique2 = "1300";
  constructor() { }

  ngOnInit(): void {
  }

}
