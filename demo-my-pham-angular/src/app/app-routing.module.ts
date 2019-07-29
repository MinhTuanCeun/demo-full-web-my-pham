import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { CartComponent } from './modules/cart/cart.component';
import { ListProductComponent } from './modules/list-product/list-product.component';
import { DetailComponent } from './modules/detail/detail.component';
import { CheckoutComponent } from './modules/checkout/checkout.component';
import { ContactComponent } from './modules/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full', },
  { path: 'index', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  { path: 'list', component: ListProductComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
