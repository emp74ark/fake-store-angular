import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../shared/interfaces";
import { CartService } from "../../services/cart.service";
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item!: Item;

  constructor(
      private user: UserService,
      private router: Router,
      private cartService: CartService
  ) {
  }

  ngOnInit(): void {
  }

  openProduct() {
    this.router.navigate(['/store', `${this.item.id}`])
  }

  addToCart($event: Event, item: Item) {
    $event.stopPropagation();
    if(this.user.authenticated) {
      this.cartService.addToCart(item);
    } else {
      this.router.navigate(['/', 'auth'])
    }
  }

}
