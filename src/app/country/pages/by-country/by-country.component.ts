import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css'],
})
export class ByCountryComponent implements OnInit {
  term: string = 'united';
  hasError: boolean = false;
  countriesSugerations: Country[] = []

  private _countries: Country[] = [] as Country[];

  constructor(private countryService: CountryService) {
    console.log('1');
  }

  ngOnInit(): any {}

  search(term: string): void {
    this.term = term;
    this.hasError = false;
    this.countryService.searchConutry(this.term).subscribe(
      (countries: Country[]) => (this._countries = countries),
      (err: any) => {
        this.hasError = true;
        this._countries = [] as Country[];
      }
    );
  }

  get countries(): Array<Country> {
    return [...this._countries];
  }

  sugerations(term: string): void {
    this.hasError = false;
    this.term  = term
    this.countryService.searchConutry(term)
      .subscribe( ( countries: Country[] ) => this.countriesSugerations = countries,
          ( error: any ) => {
            console.log(error);
            this.hasError = true
            this.countriesSugerations = []
          }
      );
  }
}
