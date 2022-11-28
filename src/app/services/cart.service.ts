import { Injectable } from '@angular/core';
import { Item } from "../shared/interfaces";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = new Map<Item, number>();

  constructor(
  ) { }

  getAll() {
    return this.cart;
  }

  addToCart(item: Item, quantity = 1) {
    for (const [key, value] of this.cart.entries()) {
      if ( key.id === item.id) {
        this.removeFromCart(item);
        this.cart.set(item, value + 1);
        return;
      }
    }
    this.cart.set(item, quantity);
  }

  removeFromCart(item: Item) {
    this.cart.delete(item);
  }

  updateInCart(item: Item, quantity: number) {
    this.cart.set(item, quantity)
  }
}
