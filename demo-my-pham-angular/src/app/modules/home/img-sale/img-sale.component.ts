import { Component } from '@angular/core';
import { ImgSaleService } from 'src/app/core/service/img-sale.service';


@Component({
  selector: 'app-img-sale',
  templateUrl: './img-sale.component.html',
  styleUrls: ['./img-sale.component.css', '../../../../mystyle/reponsive.css']
})
export class ImgSaleComponent {
    imgSales;
    constructor(private saleImgService: ImgSaleService) {
        this.getSaleImgs();
    }

    getSaleImgs() {
        this.saleImgService.getSaleImgs().subscribe(result => { this.imgSales = result; });
      }

}
