import { CountryData } from './CountryData.model';

export class IndiaDataWrapper{

    stateList:CountryData[];
    totalConfirmed:number;
        totalActive:number;
        totalDeceased:number;
        totalRecovered:number;

    constructor(countrydata:CountryData[],totalConfirmed:number,
        totalActive:number,totalDeceased:number,totalRecovered:number){
            this.stateList=countrydata
            this.totalConfirmed=totalConfirmed
               this. totalActive=totalActive
                this.totalDeceased=totalDeceased
                this.totalRecovered=totalRecovered
    }
}