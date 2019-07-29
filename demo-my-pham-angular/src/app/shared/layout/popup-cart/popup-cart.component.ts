import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from 'src/app/core/service/cart.service';


@Component({
  selector: 'app-popup-cart',
  templateUrl: './popup-cart.component.html',
  styleUrls: ['./popup-cart.component.css']
})
export class PopupCartComponent implements OnInit {

  listCart;

    constructor(public dialog: MatDialog, private service: CartService) {
    }

    ngOnInit() {
      this.listCart = this.service.getListCart();
    }

    increaseItem(item) {
      item.qty++;
    }

    reduceItem(item) {
      if (item.qty > 1) {
        item.qty--;
      }
    }

    formmatPrice(price) {
      return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + '.000₫';
    }

    totalItem(item) {
      return item.qty * item.newPrice;
    }

    total() {
      let s = 0;
      this.listCart.forEach(item => {
        s += item.qty * item.newPrice;
      });
      return s;
    }

    removeItem(item) {
      this.service.deleteItem(item);
    }

    closeDialog() {
      const dialogRef = this.dialog.closeAll();
    }

}
