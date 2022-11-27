import { Component, OnInit } from '@angular/core';
import { CartService } from "../../services/cart.service";
import { Item } from "../../shared/interfaces";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart = new Map<Item, number>();

  constructor(
      private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cart = this.cartService.getAll();
  }

  remove(item: Item) {
    this.cartService.removeFromCart(item);
    this.cart = this.cartService.getAll();
  }

  update(item: Item, $event: Event) {
    const {value} = $event.target as HTMLSelectElement;
    this.cartService.updateInCart(item, Number(value));
    this.cart = this.cartService.getAll();
  }

}
