import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class CartService {
  // Inhalt des ShoppingCarts
  items = [];

  constructor(private http: HttpClient) {}

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

   getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

  getItemPricesSum(): number {
    let sum: number = 0;
    for (let i=0;  i< this.items.length; i++) {
      sum += this.items[i].price;
    }
    return sum;
  }
}
