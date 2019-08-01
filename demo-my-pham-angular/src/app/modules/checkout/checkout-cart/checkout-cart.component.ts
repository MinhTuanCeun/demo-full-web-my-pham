import { Component } from '@angular/core';
import { CartService } from 'src/app/core/service/cart.service';
import { Product } from 'src/app/core/model/product.model';

@Component({
  selector: 'app-checkout-cart',
  templateUrl: './checkout-cart.component.html',
  styleUrls: ['./checkout-cart.component.css', '../../../../mystyle/reponsive.css'],
})
export class CheckoutCartComponent {
    listCart;
    constructor(private service: CartService) {
      this.listCart = this.service.getListCart();
    }

    formmatPrice(price) {
      return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + '.000₫';
    }

    totalItem(item) {
      return item.qty * item.newPrice;
    }

    totalCount() {
      let s = 0;
      this.listCart.forEach(item => {
        s += item.qty;
      });
      return s;
    }

    totalPrice() {
      let s = 0;
      this.listCart.forEach(item => {
        s += item.qty * item.newPrice;
      });
      return s;
    }

    total() {
      return this.totalPrice() + 40;
    }

}
