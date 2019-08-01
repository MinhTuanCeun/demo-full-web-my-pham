import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { MenuBarService } from './service/menu-bar.service';


@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css', '../../../../../mystyle/reponsive.css']
})
export class MenuBarComponent implements OnInit {

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onShow = new EventEmitter<boolean>();
  menu: any;

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
      subMenu: [
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
      subMenu: [
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

  constructor(private menuBarService: MenuBarService) {
  }

  ngOnInit() {
    this.getCatalogs();
  }

  getCatalogs(): void {
    this.menuBarService.getCatalogs().subscribe(menu => { this.menu = menu; console.log('bbbb', this.menu); });
  }

  show() {
    this.onShow.emit(false);
  }

}
