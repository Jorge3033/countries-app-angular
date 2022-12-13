import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.css']
})
export class ByCapitalComponent implements OnInit {

  hasError: boolean = false;
  term: string = ""
  private _countries: Country[] = [] as Country[]
  constructor( private countryService: CountryService ) { }

  ngOnInit(): void {
  }

  search(term: string): void {
    this.hasError = false
    this.term = term
    this.countryService.searchCapital(term)
      .subscribe(
        ( countries: Country[] ) => this._countries = countries,
        ( err: any ) => {
          this.hasError = true
          this._countries = []
        }
      )
  }

  sugerations(term: string): void {
    this.term = term
  }

  get countries(): Country[] {
    return [ ...this._countries ]
  }

}
