import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from 'src/app/core/service/product.service';
import { CartService } from 'src/app/core/service/cart.service';
import { MenuBarService } from 'src/app/core/service/menu-bar.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css', '../../../mystyle/reponsive.css']
})
export class DetailComponent {
    product = {};
    itemCatalog = {};
    constructor(private route: ActivatedRoute, private service: ProductService,
                private cartService: CartService, private menuBarService: MenuBarService) {
      this.getProductById();
      this.checkCataLog('5d424e5b4dddaa294ac79647');
    }

    checkoutNow(item) {
      this.cartService.addToListCart(item);
    }

    checkCataLog(id) {
      this.menuBarService.getCatalogById(id).subscribe(result => {
        this.itemCatalog = result;
      });
    }

    statusItem() {
      if ( this.product ) {
        if ( this.product.qty === 0 ) {
          return 'Tạm hết hàng';
        } else {
          return 'Còn hàng';
        }
      }
    }

    getProductById(): void {
      // The JavaScript (+) operator converts the string to a number
      const id = this.route.snapshot.paramMap.get('id');
      this.service.getProductById(id)
        .subscribe(result => {
          this.product = result;
        });
    }

    setNewPrice(price, discount) {
      const disPer = price * (discount / 100);
      const newPrice = price - disPer;
      return newPrice;
    }

    showDisCount(price, discount) {
      const disPer = price * (discount / 100);
      return this.formmatPrice(disPer);
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

    formmatPrice(price) {
      if (!price) {
        return null;
      }
      return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + '.000₫';
    }

}
