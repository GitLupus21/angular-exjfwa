import { Component, OnInit } from '@angular/core';
import { products } from "../products";
import { CartService } from "../cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  sum: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  getItemPriceSum(): number {
    return this.cartService.getItemPricesSum();
  }

}