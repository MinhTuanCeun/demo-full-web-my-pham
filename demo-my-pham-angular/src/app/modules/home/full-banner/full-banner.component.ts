import { Component } from '@angular/core';
import { ImgSaleService } from 'src/app/core/service/img-sale.service';


@Component({
  selector: 'app-full-banner',
  templateUrl: './full-banner.component.html',
  styleUrls: ['./full-banner.component.css', '../../../../mystyle/reponsive.css']
})
export class FullBannerComponent {
    img = {};
    constructor(private saleImgService: ImgSaleService) {
      this.getFullBanner();
    }

    getFullBanner() {
      this.saleImgService.getFullBanner().subscribe(result => { this.img = result; });
    }

}
