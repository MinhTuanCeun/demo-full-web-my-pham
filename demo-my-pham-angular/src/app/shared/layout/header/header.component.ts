import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../../../mystyle/mystyle.css', '../../../../mystyle/reponsive.css']
})
export class HeaderComponent {
    showSideBar = false;
    constructor() {
    }

    showSideBarMobile() {
      this.showSideBar = true;
    }

    closeSideBarMobile() {
      this.showSideBar = false;
    }

    parentShow(m) {
      this.showSideBar = m;
    }

}
