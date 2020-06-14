import { Component, OnInit } from '@angular/core';
import { SummaryServiceService } from '../services/summary-service.service';
import { SummaryModel } from '../entities/summary.model';

@Component({
  selector: 'app-summary-component',
  templateUrl: './summary-component.component.html',
  styleUrls: ['./summary-component.component.css']
})
export class SummaryComponentComponent implements OnInit {
  summary:SummaryModel;
  isloadedfully:boolean = false;
  
  constructor(private sum:SummaryServiceService ) { }

  ngOnInit(): void {
    this.sum.getsummarydata().subscribe(data =>{
      debugger;
      this.summary=data as SummaryModel; 
      this.isloadedfully=true; 
     // this.summary.global.totalactive=this.summary.global.TotalConfirmed-this.summary.global.TotalRecovered;
    }
        
      );
  }

 
}
