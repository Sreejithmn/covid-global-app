import { CountryVO } from './country.model';
import { GlobalVO } from './Global.VO';


export class SummaryModel{
    countries:CountryVO[];
    global:GlobalVO;

    private SummaryModel(countries:CountryVO[],
        global:GlobalVO){
            this.countries=countries;
            this.global=global
    }
}