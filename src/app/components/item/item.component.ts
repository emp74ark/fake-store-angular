import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../shared/interfaces";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item!: Item;

  additionalInfo = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleAdditionalInfo() {
    this.additionalInfo = !this.additionalInfo;
  }

  addToCart($event: Event) {
    $event.stopPropagation();
    console.log('add to cart');
  }

}
