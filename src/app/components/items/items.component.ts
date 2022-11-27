import {Component, OnInit} from '@angular/core';
import {Item} from "../../shared/interfaces";
import {ItemsService} from "../../services/items.service";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items: Item[] = [];
  categories: string[] = [];

  filters = {
    limit: 10,
    sort: 'asc',
    category: ''
  };

  constructor(
    private itemsService: ItemsService
  ) {
  }

  ngOnInit(): void {
    this._updateList();

    this.itemsService.getCategories().subscribe(
        (data) => {
          this.categories = data;
        }
    )
  }
  private _updateList() {
    const {category, limit, sort} = this.filters;

    this.itemsService.getAll(category, limit, sort).subscribe(
        {next:(data) => this.items = data}
    );
  }

  onFilter($event: Event) {
    const {name, value} = $event.target as HTMLSelectElement;

    this.filters = {
      ...this.filters,
      [name]: value,
    }

    this._updateList();
  }

  onSearch($event: string) {
    const {category, limit, sort} = this.filters;
    this.itemsService.getAll(category, limit, sort)
      .subscribe(
        (data) => {
          this.items = data.filter(el => el.title.toLowerCase().includes($event.toLowerCase()));
        }
    );
  }

  onCategory($event: Event) {
    const {innerText} = $event.target as HTMLElement
    this.filters = {...this.filters, category: innerText.toLowerCase()};
    this._updateList();
  }

  getAll() {
    this.filters = {...this.filters, category: ''};
    const {category, limit, sort} = this.filters;
    this.itemsService.getAll(category, limit, sort).subscribe(
        {next:(data) => this.items = data}
    )
  }

}
