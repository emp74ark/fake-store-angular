import { Component, OnInit } from '@angular/core';
import { ItemsService } from "../../services/items.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Item } from "../../shared/interfaces";
import { CartService } from "../../services/cart.service";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  itemId = '';
  item!: Item;

  constructor(
      private activeRoute: ActivatedRoute,
      private itemsService: ItemsService,
      private router: Router,
      private cartService: CartService,
      private user: UserService
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(
        (params: Params) => {
          this.itemId = params['id'];
          this.itemsService.getSingle(params['id'])
              .subscribe(
                  (data) => {
                    this.item = data;
                  }
              )
        }
    )
  }

  addToCart() {
    if(this.user.authenticated) {
      this.cartService.addToCart(this.item);
    } else {
      this.router.navigate(['/', 'auth'])
    }
  }

}
