import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../../models/country';

@Component({
  selector: 'app-country-list',
  imports: [NgFor,CountryComponent],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.scss'
})
export class CountryListComponent implements OnInit {
  countriesUrl = "https://restcountries.com/v3.1/all?fields=name,flags,region,subregion,population,area,capital,currencies";
  countries: Country[];

  constructor(private http: HttpClient) {
    this.countries = [];
  }

  ngOnInit(): void {
    this.getCountries().subscribe({
      next: (countries) => {
        this.countries = countries;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countriesUrl)
  }
  
  showDetails(country: Country) {
    alert(country.name.official);
  }
}