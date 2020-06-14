import { Component, OnInit } from '@angular/core';
import { IndiaServiceService } from '../services/india-service.service';
import { CountryData } from '../entities/CountryData.model';
import { IndiaDataWrapper } from '../entities/indiadata.wrapper';

@Component({
  selector: 'app-india-component',
  templateUrl: './india-component.component.html',
  styleUrls: ['./india-component.component.css']
})
export class IndiaComponentComponent implements OnInit {
  countrydata:IndiaDataWrapper;
  candisplay:boolean=false;
  constructor(private indiaservice:IndiaServiceService) { }

  ngOnInit(): void {
    this.indiaservice.getIndiaData().subscribe(data=>{
      this.countrydata = data;
      this.candisplay=true;
    })
  }

}
