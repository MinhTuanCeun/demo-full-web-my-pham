import { Component } from '@angular/core';
import { CartService } from 'src/app/core/service/cart.service';


@Component({
  selector: 'app-cart-payment',
  templateUrl: './cart-payment.component.html',
  styleUrls: ['./cart-payment.component.css', '../../../../mystyle/reponsive.css']
})
export class CartPaymentComponent {

    listCart;

    constructor(private service: CartService) {
      this.listCart = this.service.getListCart();
    }

    total() {
      let s = 0;
      this.listCart.forEach(item => {
        s += item.qty * item.newPrice;
      });
      return s;
    }

    formmatPrice(price) {
      return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + '.000₫';
    }

}
