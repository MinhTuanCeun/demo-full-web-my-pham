import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ContactComponent } from './contact.component';
import { ContactContentComponent } from './contact-content/contact-content.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [
    ContactComponent,
    ContactContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    ContactComponent,
    ContactContentComponent
  ],
  providers: [],
  bootstrap: [ContactComponent]
})
export class ContactModule {
}
