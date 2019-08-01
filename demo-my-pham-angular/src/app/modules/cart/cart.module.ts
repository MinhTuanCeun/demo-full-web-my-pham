import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CartComponent } from './cart.component';
import { CartContentComponent } from './cart-content/cart-content.component';
import { CartPaymentComponent } from './cart-payment/cart-payment.component';
import { BreadCrumbModule } from 'src/app/core/modules/bread-crumb/bread-crumb.module';


@NgModule({
  declarations: [
    CartComponent,
    CartContentComponent,
    CartPaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BreadCrumbModule,
  ],
  exports: [
    CartComponent,
    CartContentComponent,
    CartPaymentComponent
  ],
  providers: [],
  bootstrap: [CartComponent]
})
export class CartModule {}
