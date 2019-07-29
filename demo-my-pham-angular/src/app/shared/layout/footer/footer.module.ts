import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer.component';
import { FooterBuyComponent } from './footer-buy/footer-buy.component';
import { FooterContactComponent } from './footer-contact/footer-contact.component';
import { FooterPaymentComponent } from './footer-payment/footer-payment.component';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';



import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    FooterComponent,
    FooterBuyComponent,
    FooterContactComponent,
    FooterPaymentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    AppRoutingModule,
  ],
  exports: [
    FooterComponent,
    FooterBuyComponent,
    FooterContactComponent,
    FooterPaymentComponent
  ],
  providers: [],
  bootstrap: [FooterComponent]
})
export class FooterModule {
    constructor() {
        // Add an icon to the library for convenient access in other components
        // tslint:disable-next-line: max-line-length
        library.add(faMapMarkerAlt, faMobileAlt, faEnvelope, faLock);
      }
}
