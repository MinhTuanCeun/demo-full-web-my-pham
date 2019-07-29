import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PopupCartComponent } from './popup-cart.component';
import { MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [
    PopupCartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule,
  ],
  exports: [
    PopupCartComponent
  ],
  providers: [],
  bootstrap: [PopupCartComponent]
})
export class PopupCartModule {

}
