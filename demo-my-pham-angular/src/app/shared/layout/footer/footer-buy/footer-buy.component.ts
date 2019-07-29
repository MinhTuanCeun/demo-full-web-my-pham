import { Component } from '@angular/core';


@Component({
  selector: 'app-footer-buy',
  templateUrl: './footer-buy.component.html',
  styleUrls: ['./footer-buy.component.css', '../../../../../mystyle/reponsive.css']
})
export class FooterBuyComponent {

    title = 'Mua Hàng';
    menuBars = [
        {
          link: 'index',
          name: 'TRANG CHỦ'
        }, {
          link: 'list',
          name: 'SẢN PHẨM'
        }, {
          link: 'introduce',
          name: 'GIỚI THIỆU',
        }, {
          link: 'new-product',
          name: 'SẢN PHẨM MỚI'
        }, {
          link: 'sale-off',
          name: 'KHUYẾN MÃI'
        }, {
          link: 'news',
          name: 'TIN TỨC',
        }, {
          link: 'contact',
          name: 'LIÊN HỆ'
        }
      ];

    constructor() {
    }

}
