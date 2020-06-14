import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SummaryModel } from '../entities/summary.model';

@Injectable({
  providedIn: 'root'
})
export class SummaryServiceService {
  summary:SummaryModel;
  constructor(private http:HttpClient) { }

  getsummarydata(){
    return this.http.get<SummaryModel>('https://world-summary-app.herokuapp.com//summary/all');
  }
}
