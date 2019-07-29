import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';







import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HeaderComponent } from './header.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { TopLogoComponent } from './top-logo/top-logo.component';
import { TopSearchComponent } from './top-search/top-search.component';
import { TopRightComponent } from './top-right/top-right.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuBarComponent,
    TopLogoComponent,
    TopSearchComponent,
    TopRightComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    AppRoutingModule,
  ],
  exports: [
    HeaderComponent,
    MenuBarComponent,
    TopLogoComponent,
    TopSearchComponent,
    TopRightComponent,
  ],
  providers: [],
  bootstrap: [HeaderComponent]
})
export class HeaderModule {
    constructor() {
        // Add an icon to the library for convenient access in other components
        // tslint:disable-next-line: max-line-length
        library.add(faLongArrowAltLeft, faSearch, faShoppingCart, faCaretDown);
      }
}
