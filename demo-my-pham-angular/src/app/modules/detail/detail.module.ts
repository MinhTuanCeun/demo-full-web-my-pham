import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { BreadCrumbModule } from 'src/app/core/modules/bread-crumb/bread-crumb.module';
import { DetailComponent } from './detail.component';


@NgModule({
  declarations: [
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BreadCrumbModule
  ],
  exports: [
    DetailComponent
  ],
  providers: [],
  bootstrap: [DetailComponent]
})
export class DetailModule {
    constructor() {
        // Add an icon to the library for convenient access in other components
        library.add(faStar);
      }
}
