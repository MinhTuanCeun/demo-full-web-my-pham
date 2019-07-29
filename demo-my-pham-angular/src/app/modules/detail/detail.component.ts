import { Component } from '@angular/core';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css', '../../../mystyle/reponsive.css']
})
export class DetailComponent {
    product = {
        id: '1',
        urlImg: 'http://bizweb.dktcdn.net/thumb/large/100/356/191/products/1989741-l.jpg?v=1559200143640',
        title: 'Tinh chất dưỡng và ngăn ngừa lão hóa vùng da quanh mắt Laneige Time Freeze Eye Serum EX 20ml',
        brand: 'Marc',
        status: 'Còn hàng',
        newPrice: '585.000₫',
        oldPrice: '1.100.000₫',
        qty: 1
    };
    constructor() {
    }

}
