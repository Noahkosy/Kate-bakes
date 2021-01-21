import { Component, OnInit } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems;

  salesTax = 0;

  cartTotal = 0;

  constructor(
    private cookie: CookieService,
  ) {}

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems() {
    var jsonCart = this.cookie.get('cart')
      this.cartItems = JSON.parse(jsonCart)
      this.calculateSalesTax()
      this.calculateCartTotal();
      
  }

  calculateSalesTax(){
    this.salesTax = 0
    for (var i in this.cartItems){
      var item = this.cartItems[i]
      this.salesTax += (item.cost * 0.07 * +item.qty)
    }
  }

  calculateCartTotal(){
    this.cartTotal = 0
    for (var h in this.cartItems){
      var item = this.cartItems[h]
      this.cartTotal += (+item.qty * item.cost + this.salesTax)
    }
  }

  deleteAllCookies(){
    var cookies = document.cookie.split(";");
    console.log(cookies)

    for(var i = 0; i < cookies.length; i++){
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }

  clearCartHandler(){
    this.cartItems = {}
    this.deleteAllCookies();
    this.cartTotal = 0;
    this.salesTax = 0;
  }

  // itemQtyHandler(){
  //   var item = this.cartItems[h]
  //   item.qty - 1
  // }
  
} 
