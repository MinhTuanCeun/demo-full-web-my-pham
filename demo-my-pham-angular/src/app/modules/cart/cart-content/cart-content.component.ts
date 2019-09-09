import { Component } from '@angular/core';
import { CartService } from 'src/app/core/service/cart.service';
import { Product } from 'src/app/core/model/product.model';


@Component({
  selector: 'app-cart-content',
  templateUrl: './cart-content.component.html',
  styleUrls: ['./cart-content.component.css', '../../../../mystyle/reponsive.css']
})
export class CartContentComponent {
    listCart;
    constructor(private service: CartService) {
      this.listCart = this.service.getListCart();
    }

    setNewPrice(price, discount) {
      const disPer = price * (discount / 100);
      const newPrice = price - disPer;
      return newPrice;
    }

    formmatPrice(price) {
      return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + '.000₫';
    }

    increaseItem(item) {
      item.qty++;
    }

    reduceItem(item) {
      if (item.qty > 1) {
        item.qty--;
      }
    }

    totalItem(item) {
      return item.qty * this.setNewPrice(item.price, item.discount);
    }
}
