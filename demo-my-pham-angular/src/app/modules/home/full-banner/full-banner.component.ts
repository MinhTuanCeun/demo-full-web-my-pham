import { Component } from '@angular/core';


@Component({
  selector: 'app-full-banner',
  templateUrl: './full-banner.component.html',
  styleUrls: ['./full-banner.component.css', '../../../../mystyle/reponsive.css']
})
export class FullBannerComponent {
    img = {
            link: 'abc',
            urlImg: 'http://bizweb.dktcdn.net/100/356/191/themes/721185/assets/evo_full_banner.jpg?1561955821978'
        };
    constructor() {
    }

}
