import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SummaryModel } from '../entities/summary.model';

@Component({
  selector: 'app-world-table',
  templateUrl: './world-table.component.html',
  styleUrls: ['./world-table.component.css']
})
export class WorldTableComponent implements OnInit,OnChanges {

  @Input() summarydata:SummaryModel;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    console.log('hiii')
  }

}
