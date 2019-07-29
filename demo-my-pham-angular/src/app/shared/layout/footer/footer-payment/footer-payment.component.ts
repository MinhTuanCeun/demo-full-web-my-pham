import { Component } from '@angular/core';


@Component({
  selector: 'app-footer-payment',
  templateUrl: './footer-payment.component.html',
  styleUrls: ['./footer-payment.component.css', '../../../../../mystyle/reponsive.css']
})
export class FooterPaymentComponent {
    title = 'Đăng ký nhận tin';
    info = 'Nhận thông tin sản phẩm mới nhất, tin khuyến mãi và nhiều hơn nữa.';
    showPayment = [
      {
        url: 'http://bizweb.dktcdn.net/100/356/191/themes/721185/assets/payment_1.svg?1561955821978',
        title: 'abc'
      }, {
        url: 'http://bizweb.dktcdn.net/100/356/191/themes/721185/assets/payment_2.svg?1561955821978',
        title: 'abc'
      }, {
        url: 'http://bizweb.dktcdn.net/100/356/191/themes/721185/assets/payment_3.svg?1561955821978',
        title: 'abc'
      }, {
        url: 'http://bizweb.dktcdn.net/100/356/191/themes/721185/assets/payment_4.svg?1561955821978',
        title: 'abc'
      }
    ];

    constructor() {
    }

}
