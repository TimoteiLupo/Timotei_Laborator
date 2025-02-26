import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Country } from '../../models/country';
@Component({
  selector: 'app-country',
  imports: [NgIf],
  templateUrl: './country.component.html',
  styleUrl: './country.component.scss'
})
export class CountryComponent {
  @Input() country?: Country;
  @Output() onclick = new EventEmitter<Country>();

  show() {
    this.onclick.emit(this.country);
  }
}