
export class DistrictData{

    district:string;
    active:number;
    confirmed:number;
    deceased:number;
    recovered:number;
    constructor(district:string,active:number,confirmed:number,deceased:number,recovered:number){
        this.district=district;
        this.active=active;
        this.confirmed=confirmed;
        this.deceased=deceased;
        this.recovered=recovered;
    }
}