import { Component } from '@angular/core';


@Component({
  selector: 'app-top-logo',
  templateUrl: './top-logo.component.html',
  styleUrls: ['./top-logo.component.css', '../../../../../mystyle/reponsive.css']
})
export class TopLogoComponent {
    logoTop = {
        link: 'index',
        name: 'http://bizweb.dktcdn.net/100/356/191/themes/721185/assets/logo.png?1560243800421'
    };

    constructor() {
    }

}
