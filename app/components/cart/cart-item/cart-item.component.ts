import { Component, Input, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem;

  constructor(
    private cookie: CookieService,
  ) { }

  ngOnInit(): void {
  }

  removeItemHandler(productname){
    // grab the cart string from cookies
    var cartString = this.cookie.get('cart')
    // parse the sting into an object 
    var cartObject = JSON.parse(cartString)
    // check if the current item matches an item in cart object
    if(productname === cartObject.productname){
    // remove that item from the cart object
      cartObject.productname = {}
    }
    // ?? do i need to reset the cart now ??
    // this.cookie.set()
  }

}
