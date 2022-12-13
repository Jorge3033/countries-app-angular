import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/countries.interface';

import { switchMap, Observable, tap } from 'rxjs';


@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styleUrls: ['./show-country.component.css']
})
export class ShowCountryComponent implements OnInit {

  countries: Country[] = [] as Country[]

  constructor(private activatedRoute: ActivatedRoute, private countryService: CountryService) { }

  ngOnInit(): void {

    // this.activatedRoute.params.subscribe((params: any) => {
    //   const country_code: string = params?.country_code || ""

    //   this.countryService.getCountryByCountryCode(country_code)
    //     .subscribe((country: Country) => console.log(country))

    // })

    this.activatedRoute.params
      .pipe(
        switchMap((params: any): Observable<Country[]> => this.countryService.getCountryByCountryCode(params?.country_code || "")),
        tap( console.log )
      )
      .subscribe(
        (country: Country[]) => this.countries = country,
        (err: any) => {

      })

  }

}
