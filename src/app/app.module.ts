import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryComponentComponent } from './summary-component/summary-component.component';
import { IndiaComponentComponent } from './india-component/india-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import {HttpClientModule} from '@angular/common/http';
import { WorldTableComponent } from './world-table/world-table.component';
import { IndiaSummaryComponent } from './india-summary/india-summary.component';
import { IndiaTableComponent } from './india-table/india-table.component'

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponentComponent,
    IndiaComponentComponent,
    HeaderComponentComponent,
    WorldTableComponent,
    IndiaSummaryComponent,
    IndiaTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
