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

    setNewPrice(price, discount) {
      const disPer = price * (discount / 100);
      const newPrice = price - disPer;
      return newPrice;
    }

    total() {
      let s = 0;
      this.listCart.forEach(item => {
        s += item.qty * this.setNewPrice(item.price, item.discount);
      });
      return s;
    }

    formmatPrice(price) {
      return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + '.000₫';
    }

}
