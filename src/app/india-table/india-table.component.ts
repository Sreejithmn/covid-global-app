import { Component, OnInit, Input } from '@angular/core';
import { IndiaDataWrapper } from '../entities/indiadata.wrapper';
import { IndiaServiceService } from '../services/india-service.service';

@Component({
  selector: 'app-india-table',
  templateUrl: './india-table.component.html',
  styleUrls: ['./india-table.component.css']
})
export class IndiaTableComponent implements OnInit {

  indiasdata:IndiaDataWrapper;
  constructor(private indiaservice:IndiaServiceService) { }

  ngOnInit(): void {
    this.indiaservice.getIndiaData().subscribe(data=>{
      this.indiasdata = data;
    })
  }

}
