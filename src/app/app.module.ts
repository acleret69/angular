import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { HttpClientModule } from '@angular/common/http';
import { MonServiceService } from './monservice.service';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    StatistiqueComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    HttpModule
  ],
  providers: [MonServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
