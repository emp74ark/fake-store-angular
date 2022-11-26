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

  filters = {
    limit: 5,
    sort: 'asc'
  };

  constructor(
    private itemsService: ItemsService
  ) {
  }

  ngOnInit(): void {
    this.itemsService.getAll().subscribe(
      {next:(data) => this.items = data}
    )
  }

  onFilter($event: Event) {
    const {name, value} = $event.target as HTMLSelectElement;
    this.filters = {
      ...this.filters,
      [name]: value,
    }
    const {limit, sort} = this.filters;
    this.itemsService.getAll(limit, sort).subscribe(
      {next:(data) => this.items = data}
    );
  }

  onSearch($event: string) {
    this.itemsService.getAll()
      .subscribe(
        (data) => {
          this.items = data.filter(el => el.title.toLowerCase().includes($event.toLowerCase()));
        }
    );
  }

}
