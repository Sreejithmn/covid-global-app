
export class CountryVO{
    CountryCode:String
	    Slug:String
	    NewConfirmed:number;
	     TotalConfirmed:number;
	    NewDeaths:number;
	    TotalDeaths:number;
	     NewRecovered:number;
	    TotalRecovered:number;
        Date:String
      
        private CountryVO(CountryCode:String,
            Slug:String,
            NewConfirmed:number,
             TotalConfirmed:number,
            NewDeaths:number,
            TotalDeaths:number,
             NewRecovered:number,
            TotalRecovered:number,
            Date:String){
                this.CountryCode=CountryCode
                this.Date=Date
                this.NewConfirmed=NewConfirmed
                this.NewDeaths=NewDeaths
                this.NewRecovered=NewRecovered
                this.Slug=Slug
                this.TotalConfirmed=TotalConfirmed
                this.TotalDeaths=TotalDeaths
                this.TotalRecovered=TotalRecovered
            }

}