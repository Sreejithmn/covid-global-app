import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { IndiaDataWrapper } from '../entities/indiadata.wrapper';

@Component({
  selector: 'app-india-summary',
  templateUrl: './india-summary.component.html',
  styleUrls: ['./india-summary.component.css']
})
export class IndiaSummaryComponent implements OnInit {

  @Input() indiasdata;
  constructor() { }
  

  ngOnInit(): void {
    console.log('here' + this.indiasdata);
  }

}
