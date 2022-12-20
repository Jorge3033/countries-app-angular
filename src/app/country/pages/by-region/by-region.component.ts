import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css'],
})
export class ByRegionComponent implements OnInit {
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';

  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {}

  getActiveRegion(region: string): string {
    return region == this.activeRegion ? 'btn btn-primary' : 'btn btn-link';
  }

  setActiveRegion(region: string) {
    this.activeRegion = region;

    this.getCountries();
  }

  private getCountries(): void {
    this.countryService
      .getCountryByRegion(this.activeRegion)
      .subscribe(
        (countries: Country[]) => this.countries = countries,
        (error: any) => console.log(error)
      );
  }
}
