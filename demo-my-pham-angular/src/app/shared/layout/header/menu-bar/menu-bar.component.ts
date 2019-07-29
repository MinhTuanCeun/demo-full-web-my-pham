import { Component , Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css', '../../../../../mystyle/reponsive.css']
})
export class MenuBarComponent {

    // tslint:disable-next-line: no-output-on-prefix
    @Output() onShow = new EventEmitter<boolean>();

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
        subMenu : [
          {
            link: 'introduce',
            name: 'HỆ THỐNG CỬA HÀNG',
          }, {
            link: 'introduce',
            name: 'CÂU HỎI THƯỜNG GẶP',
          }
        ]
      }, {
        link: 'new-product',
        name: 'SẢN PHẨM MỚI'
      }, {
        link: 'sale-off',
        name: 'KHUYẾN MÃI'
      }, {
        link: 'news',
        name: 'TIN TỨC',
        subMenu : [
          {
            link: 'introduce',
            name: 'TƯ VẤN LÀM ĐẸP',
          }
        ]
      }, {
        link: 'contact',
        name: 'LIÊN HỆ'
      }
    ];

    constructor() {
    }

    show() {
      this.onShow.emit(false);
    }

}
