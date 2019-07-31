import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingBasket, faShare, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { HomeComponent } from './home.component';
import { FullBannerComponent } from './full-banner/full-banner.component';
import { HotDealComponent } from './hot-deal/hot-deal.component';
import { HotProductComponent } from './hot-product/hot-product.component';
import { ImgSaleComponent } from './img-sale/img-sale.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ShowMagazineComponent } from './show-magazine/show-magazine.component';
import { SlideContentComponent } from './slide-content/slide-content.component';
import { PopupCartModule } from 'src/app/shared/layout/popup-cart/popop-cart.module';

import { NgxHmCarouselModule } from 'ngx-hm-carousel';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    FullBannerComponent,
    HotDealComponent,
    HotProductComponent,
    ImgSaleComponent,
    NewProductComponent,
    ShowMagazineComponent,
    SlideContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    PopupCartModule,
    NgxHmCarouselModule
  ],
  exports: [
    HomeComponent,
    FullBannerComponent,
    HotDealComponent,
    HotProductComponent,
    ImgSaleComponent,
    NewProductComponent,
    ShowMagazineComponent,
    SlideContentComponent
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule {
    constructor() {
        // Add an icon to the library for convenient access in other components
        library.add(faShoppingBasket, faShare, faAngleLeft, faAngleRight);
      }
}
