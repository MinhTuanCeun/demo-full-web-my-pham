import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BreadCrumbComponent } from './bread-crumb.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


@NgModule({
  declarations: [
    BreadCrumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  exports: [
    BreadCrumbComponent
  ],
  providers: [],
  bootstrap: [BreadCrumbComponent]
})
export class BreadCrumbModule {
    constructor() {
        // Add an icon to the library for convenient access in other components
        // tslint:disable-next-line: max-line-length
        library.add(faChevronRight);
      }
}
