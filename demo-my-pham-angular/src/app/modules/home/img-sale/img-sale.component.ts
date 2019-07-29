import { Component } from '@angular/core';


@Component({
  selector: 'app-img-sale',
  templateUrl: './img-sale.component.html',
  styleUrls: ['./img-sale.component.css', '../../../../mystyle/reponsive.css']
})
export class ImgSaleComponent {
    imgSales = [
        {
            link: '',
            urlImg: 'http://bizweb.dktcdn.net/100/356/191/themes/721185/assets/ant_index_banner_1.jpg?1560243800421'
        }, {
            link: '',
            urlImg: 'http://bizweb.dktcdn.net/100/356/191/themes/721185/assets/ant_index_banner_2.jpg?1561955821978'
        }
    ];
    constructor() {
    }

}
