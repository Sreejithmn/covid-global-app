import { DistrictData } from './district.model';

export class CountryData{

    state:string;
    statecode:string;
    districts:DistrictData[];
    totalConfirmed:number;
    totalActive:number;
    totalDeceased:number;
    totalRecovered:number;

    constructor(state:string,statecode:string,districts:DistrictData[],totalConfirmed:number,
        totalActive:number,
        totalDeceased:number,
        totalRecovered:number){

            this.state=state;
            this.statecode=statecode;
            this.districts=districts;
            this.totalConfirmed=totalConfirmed;
            this.totalActive=totalActive;
            this.totalDeceased=totalDeceased;
            this.totalRecovered=totalRecovered;

    }
}