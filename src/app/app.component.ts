import { Component } from '@angular/core';
import {MonServiceService} from './monservice.service';
//import { Http , Response } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mesDonnees: any;
  constructor(private monService: MonServiceService ){
  this.ngOnInit()
  }
  ngOnInit(){
    this.monService.
    recevez().
     subscribe(donnees=> {
      this.mesDonnees = donnees;
      console.log(this.mesDonnees)
      });
    }
  }
  

