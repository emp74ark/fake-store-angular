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
    this.cart.set(item, quantity);
  }

  removeFromCart(item: Item) {
    this.cart.delete(item);
    console.log(this.cart);
  }

  updateInCart(item: Item, quantity: number) {
    this.cart.set(item, quantity)
    console.log(this.cart);
  }
}
