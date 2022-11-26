import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() onSearch = new EventEmitter<string>();
  searchRequest = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  search() {
    this.onSearch.emit(this.searchRequest);
  }

}
