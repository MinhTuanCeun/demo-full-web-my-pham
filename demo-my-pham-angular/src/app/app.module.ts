import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { IndexComponent } from './shared/layout/index/index.component';
import { LoginComponent } from './modules/login/login.component';
import { FooterModule } from './shared/layout/footer/footer.module';
import { HeaderModule } from './shared/layout/header/header.module';
import { CartModule } from './modules/cart/cart.module';
import { ListProductModule } from './modules/list-product/list-product.module';
import { CheckoutModule } from './modules/checkout/checkout.module';
import { DetailModule } from './modules/detail/detail.module';
import { ContactModule } from './modules/contact/contact.module';
import { HomeModule } from './modules/home/home.module';
import { RegisterComponent } from './modules/register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgxCaptchaModule,
    AppRoutingModule,
    FontAwesomeModule,
    FooterModule,
    HeaderModule,
    CartModule,
    ListProductModule,
    CheckoutModule,
    DetailModule,
    ContactModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
