import { Component } from '@angular/core';
import { CartService } from 'src/app/core/service/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css', '../../../mystyle/reponsive.css']
})
export class CartComponent {
    listCart;
    constructor(private service: CartService) {
      this.listCart = this.service.getListCart();
    }

    total() {
      let s = 0;
      this.listCart.forEach(item => {
        s += item.qty;
      });
      return s;
    }

}
