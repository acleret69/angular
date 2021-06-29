import { Component, OnInit } from '@angular/core';
import { Statistique } from '../models/statistique';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {

  public stat1: Statistique;
  public stat2: Statistique;
  public stat3: Statistique;

  public listeStats : Statistique[];

  constructor() {
    this.stat1 = new Statistique(345);
    this.stat2 = new Statistique(780);
    this.stat3 = new Statistique(9516);

    this.listeStats = [
      this.stat1, this.stat2, this.stat3
    ];
  }

  ngOnInit(): void {
  }

}
