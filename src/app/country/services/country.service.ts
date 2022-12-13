import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/countries.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private readonly apiUrl: string = 'https://restcountries.com/v3.1/'

  constructor(private http: HttpClient) { }

  searchConutry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`
    return this.http.get<Country[]>(url)
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`
    return this.http.get<Country[]>(url)
  }

  getCountryByCountryCode(country_code: string): Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${country_code}`
    return this.http.get<Country[]>(url)
  }

}
