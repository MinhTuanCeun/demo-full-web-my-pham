import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupCartComponent } from 'src/app/shared/layout/popup-cart/popup-cart.component';
import { PopupService } from 'src/app/shared/layout/popup-cart/service/popup-cart.service';
import { CartService } from 'src/app/core/service/cart.service';


@Component({
  selector: 'app-hot-product',
  templateUrl: './hot-product.component.html',
  styleUrls: ['../../../../mystyle/reponsive.css', '../../../../mystyle/mystyle.css']
})
export class HotProductComponent {

    listProductSales = [
      {
        id: '1',
        urlImg: 'http://bizweb.dktcdn.net/thumb/large/100/356/191/products/2005421-l.jpg?v=1559200232883',
        sale: '50%',
        title: 'Combo trang điểm dưỡng da trắng hồng rạng rỡ',
        newPrice: 585,
        oldPrice: 1100,
        qty: 1
      }, {
        id: '2',
        urlImg: 'http://bizweb.dktcdn.net/thumb/large/100/356/191/products/1989741-l.jpg?v=1559200143640',
        sale: '50%',
        title: 'Tinh chất dưỡng và ngăn ngừa lão hóa vùng da quanh mắt Laneige Time Freeze Eye Serum EX 20ml',
        newPrice: 960,
        oldPrice: 1400,
        qty: 1
      }, {
        id: '3',
        urlImg: 'http://bizweb.dktcdn.net/thumb/large/100/356/191/products/2003117-l.jpg?v=1559200018347',
        sale: '50%',
        title: 'Bộ sản phẩm du lịch mùa hè Laneige summer season',
        newPrice: 399,
        oldPrice: 798,
        qty: 1
      }, {
        id: '4',
        urlImg: 'http://bizweb.dktcdn.net/thumb/large/100/356/191/products/1987325-l.jpg?v=1558448060217',
        sale: '50%',
        title: 'Combo mặt nạ ngủ và trang điểm BB Cushion kiềm dầu Laneige',
        newPrice: 399,
        oldPrice: 798,
        qty: 1
      }
    ];
    constructor(public dialog: MatDialog, private cartService: CartService) {
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
      return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + '.000₫';
    }

}
