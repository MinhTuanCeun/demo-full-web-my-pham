import { Component } from '@angular/core';
import { CartService } from 'src/app/core/service/cart.service';


@Component({
  selector: 'app-top-right',
  templateUrl: './top-right.component.html',
  styleUrls: ['./top-right.component.css', '../../../../../mystyle/reponsive.css']
})
export class TopRightComponent {
    logoTop = {
        link: 'index',
        name: 'http://bizweb.dktcdn.net/100/356/191/themes/721185/assets/logo.png?1560243800421'
    };
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
