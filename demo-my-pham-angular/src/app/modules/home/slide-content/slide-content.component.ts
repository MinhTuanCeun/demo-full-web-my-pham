import { Component, OnInit } from '@angular/core';
import { SlideContentService } from './service/slide.content.service';

@Component({
  selector: 'app-slide-content',
  templateUrl: './slide-content.component.html',
  styleUrls: ['./slide-content.component.css', '../../../../mystyle/reponsive.css']
})
export class SlideContentComponent implements OnInit {

  index = 0;
  speed = 20;
  infinite = true;
  direction = 'right';
  directionToggle = true;
  autoplay = true;
  avatars;
  constructor(private slideService: SlideContentService) {
    // this.getSlideContents();
  }

  ngOnInit() {
    this.getSlideContents();
  }

  getSlideContents() {
    this.slideService.getSlideContents().subscribe(res => {
      this.avatars = res;
    });
  }

}
