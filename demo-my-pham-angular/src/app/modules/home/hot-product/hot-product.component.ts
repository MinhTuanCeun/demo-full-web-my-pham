import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupCartComponent } from 'src/app/shared/layout/popup-cart/popup-cart.component';
import { PopupService } from 'src/app/shared/layout/popup-cart/service/popup-cart.service';
import { CartService } from 'src/app/core/service/cart.service';
import { ProductService } from 'src/app/core/service/product.service';


@Component({
  selector: 'app-hot-product',
  templateUrl: './hot-product.component.html',
  styleUrls: ['../../../../mystyle/reponsive.css', '../../../../mystyle/mystyle.css']
})
export class HotProductComponent {

    listProductSales;
    constructor(public dialog: MatDialog, private cartService: CartService, private productService: ProductService) {
      this.getNewProducts();
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

    setNewPrice(price, discount) {
      const disPer = price * (discount / 100);
      const newPrice = price - disPer;
      return this.formmatPrice(newPrice);
    }

    getNewProducts() {
      this.productService.getProductsInHomePage('hot-products')
        .subscribe(result => { this.listProductSales = result; });
    }

}
