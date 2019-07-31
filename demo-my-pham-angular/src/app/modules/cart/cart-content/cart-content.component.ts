import { Component } from '@angular/core';
import { CartService } from 'src/app/core/service/cart.service';
import { Product } from 'src/app/core/model/product.model';


@Component({
  selector: 'app-cart-content',
  templateUrl: './cart-content.component.html',
  styleUrls: ['./cart-content.component.css', '../../../../mystyle/reponsive.css']
})
export class CartContentComponent {
    // listCart = [
    //   {
    //     id: '1',
    //     urlImg: 'http://bizweb.dktcdn.net/thumb/medium/100/356/191/products/1989741-l.jpg',
    //     title: 'Tinh chất dưỡng và ngăn ngừa lão hóa vùng da quanh mắt Laneige Time Freeze Eye Serum EX 20ml',
    //     price: '960.000₫',
    //     qty: 1
    //   }, {
    //     id: '2',
    //     urlImg: 'http://bizweb.dktcdn.net/thumb/medium/100/356/191/products/1989741-l.jpg',
    //     title: 'Tinh chất dưỡng và ngăn ngừa lão hóa vùng da quanh mắt Laneige Time Freeze Eye Serum EX 20ml',
    //     price: '960.000₫',
    //     qty: 1
    //   }, {
    //     id: '3',
    //     urlImg: 'http://bizweb.dktcdn.net/thumb/medium/100/356/191/products/1989741-l.jpg',
    //     title: 'Tinh chất dưỡng và ngăn ngừa lão hóa vùng da quanh mắt Laneige Time Freeze Eye Serum EX 20ml',
    //     price: '960.000₫',
    //     qty: 1
    //   }, {
    //     id: '4',
    //     urlImg: 'http://bizweb.dktcdn.net/thumb/medium/100/356/191/products/1989741-l.jpg',
    //     title: 'Tinh chất dưỡng và ngăn ngừa lão hóa vùng da quanh mắt Laneige Time Freeze Eye Serum EX 20ml',
    //     price: '960.000₫',
    //     qty: 1
    //   }
    // ];
    listCart;
    constructor(private service: CartService) {
      this.listCart = this.service.getListCart();
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
      return item.qty * item.newPrice;
    }
}
