import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';







import { AppRoutingModule } from 'src/app/app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShippingFast } from '@fortawesome/free-solid-svg-icons';
import {MatBadgeModule} from '@angular/material/badge';
import { CheckoutComponent } from './checkout.component';
import { CheckoutContentComponent } from './checkout-content/checkout-content.component';
import { CheckoutCartComponent } from './checkout-cart/checkout-cart.component';
import { MatFormFieldModule, MatInputModule, MatSelectModule, MatRadioModule, } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CheckoutComponent,
    CheckoutContentComponent,
    CheckoutCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    BrowserAnimationsModule,
    MatBadgeModule
  ],
  exports: [
    CheckoutComponent,
    CheckoutContentComponent,
    CheckoutCartComponent
  ],
  providers: [],
  bootstrap: [CheckoutComponent]
})
export class CheckoutModule {
    constructor() {
        // Add an icon to the library for convenient access in other components
        // tslint:disable-next-line: max-line-length
        library.add(faShippingFast);
      }
}
