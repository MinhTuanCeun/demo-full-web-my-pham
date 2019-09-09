import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PopupCartComponent } from 'src/app/shared/layout/popup-cart/popup-cart.component';
import { CartService } from 'src/app/core/service/cart.service';
import { ProductService } from 'src/app/core/service/product.service';


@Component({
  selector: 'app-hot-deal',
  templateUrl: './hot-deal.component.html',
  styleUrls: ['../../../../mystyle/reponsive.css', '../../../../mystyle/mystyle.css']
})
export class HotDealComponent implements OnInit {
    productSale;
    constructor(public dialog: MatDialog, private cartService: CartService, private productService: ProductService) {}

    ngOnInit() {
      this.getHotDeals();
    }

    getHotDeals() {
      this.productService.getProductsInHomePage('hot-deal')
        .subscribe(result => { this.productSale = result; });
    }

    setNewPrice(price, discount) {
      const disPer = price * (discount / 100);
      const newPrice = price - disPer;
      return this.formmatPrice(newPrice);
    }

    openDialog(item) {
      this.cartService.addToListCart(item);

      // tslint:disable-next-line: no-use-before-declare
      const dialogRef = this.dialog.open(PopupCartComponent);
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

    formmatPrice(price) {
      if (!price) {
        return null;
      }
      return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + '.000₫';
    }

}


