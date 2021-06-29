import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
//import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})

export class MonServiceService {
  private monUrl =" https://stats.naminilamy.fr/";
  constructor(public myhttp: Http) { }
  recevez(){
  return this.myhttp.get(this.monUrl).map(res=> res.json())
  }
  }
