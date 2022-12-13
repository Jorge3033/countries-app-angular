import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-input-country',
  templateUrl: './input-country.component.html',
  styleUrls: ['./input-country.component.css']
})
export class InputCountryComponent implements OnInit {

  term: string = "";
  @Output() onSendTerm: EventEmitter<string> = new EventEmitter<string>();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter<string>();
  @Input() placeHolder: string = "Buscar por pais";

  debouncer: Subject<string> = new Subject<string>()

  hasError: boolean = false;

  constructor( private countryService: CountryService ) { }

  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe( (term: string) => this.onDebounce.emit( term ) )
  }

  search(): void {
    this.onSendTerm.emit(this.term)
  }

  keyPressed( event: any ) {
    this.debouncer.next(this.term)
  }

}
