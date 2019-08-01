import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingBasket, faShare, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { ListProductComponent } from './list-product.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ListProductContentComponent } from './list-product-content/list-product-content.component';
import { BreadCrumbModule } from 'src/app/core/modules/bread-crumb/bread-crumb.module';


@NgModule({
  declarations: [
    ListProductComponent,
    SideBarComponent,
    ListProductContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BreadCrumbModule
  ],
  exports: [
    ListProductComponent,
    SideBarComponent,
    ListProductContentComponent
  ],
  providers: [],
  bootstrap: [ListProductComponent]
})
export class ListProductModule {
    constructor() {
        // Add an icon to the library for convenient access in other components
        library.add(faShoppingBasket, faShare, faAngleLeft, faAngleRight);
      }
}
