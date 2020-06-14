
export class GlobalVO{
    NewConfirmed:number;
	TotalConfirmed:number;
	NewDeaths:number;
	TotalDeaths:number;
	NewRecovered:number;
    TotalRecovered:number;
    totalactive:number;
    
   
    private SummaryVO(NewConfirmed:number,
        TotalConfirmed:number,
        NewDeaths:number,
        TotalDeaths:number,
        NewRecovered:number,
        TotalRecovered:number){
            this.NewConfirmed=NewConfirmed
            this.NewDeaths=NewDeaths
            this.NewRecovered=NewRecovered
            this.TotalConfirmed=TotalConfirmed
            this.TotalDeaths=TotalDeaths
            this.TotalRecovered=TotalRecovered
            this.totalactive=TotalConfirmed-TotalRecovered;
    }
}