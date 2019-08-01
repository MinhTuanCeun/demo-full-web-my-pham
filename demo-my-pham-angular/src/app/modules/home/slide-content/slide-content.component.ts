import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-content',
  templateUrl: './slide-content.component.html',
  styleUrls: ['./slide-content.component.css', '../../../../mystyle/reponsive.css']
})
export class SlideContentComponent {

  index = 0;
  speed = 2000;
  infinite = true;
  direction = 'right';
  directionToggle = true;
  autoplay = false;
  test = [
    {
      url: 'http://bizweb.dktcdn.net/100/356/191/themes/721185/assets/slider_1.jpg?1560243800421',
      title: 'banner1'
    },
    {
      url: '../../../../assets/img/banner/17498977_1866608150295116_4828705807854365071_n.jpg',
      title: 'banner2'
    }, {
      url: '../../../../assets/img/banner/29597805_2046038739018722_8455170047013950050_n.jpg',
      title: 'banner2'
    }, {
      url: '../../../../assets/img/banner/26167058_2002532980035965_4893170901862444942_n.jpg',
      title: 'banner2'
    }, {
      url: '../../../../assets/img/banner/43734643_2191901331099128_8603584801225572352_n.jpg',
      title: 'banner2'
    }, {
      url: '../../../../assets/img/banner/56571167_2308736242748969_6482441740975341568_n.jpg',
      title: 'banner2'
    }, {
      url: '../../../../assets/img/banner/67464826_2386624758293450_3837061075723878400_n.jpg',
      title: 'banner2'
    },
  ];
  avatars = this.test;
    constructor() {
    }

}
