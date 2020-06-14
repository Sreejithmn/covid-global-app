import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountryData } from '../entities/CountryData.model';
import { IndiaDataWrapper } from '../entities/indiadata.wrapper';

@Injectable({
  providedIn: 'root'
})
export class IndiaServiceService {

  constructor(private http:HttpClient) { }

  getIndiaData(){
    return this.http.get<IndiaDataWrapper>('https://india-summary-service.herokuapp.com/country/data');
  }
}
