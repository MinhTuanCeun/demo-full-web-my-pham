import { Component } from '@angular/core';


@Component({
  selector: 'app-show-magazine',
  templateUrl: './show-magazine.component.html',
  styleUrls: ['./show-magazine.component.css', '../../../../mystyle/reponsive.css']
})
export class ShowMagazineComponent {

    listmagazine = [
      {
        id: '1',
        // tslint:disable-next-line: max-line-length
        urlImg: 'http://bizweb.dktcdn.net/thumb/large/100/356/191/articles/okame-skincare-review-quoc-te-600x400-033dd837-7e47-4e3b-848d-df42b26cf9e8.jpg?v=1558446668900',
        name: 'Liệu trình thư giãn cơ thể cho dân văn phòng cùng Okame',
        description: 'Hãy cùng Louis khám phá nhé! Sữa tắm OKAME Skin Replenishing Body Shower Nếu bạn là tín đồ trung...'
      }, {
        id: '2',
        // tslint:disable-next-line: max-line-length
        urlImg: 'http://bizweb.dktcdn.net/thumb/large/100/356/191/articles/maxresdefault-6bc4f124e52a22012adc9019d4f45ec0-600x400.jpg?v=1558446615717',
        name: 'Liệu trình thư giãn cơ thể cho dân văn phòng cùng Okame',
        description: 'Hãy cùng Louis khám phá nhé! Sữa tắm OKAME Skin Replenishing Body Shower Nếu bạn là tín đồ trung...'
      }, {
        id: '3',
        urlImg: 'http://bizweb.dktcdn.net/thumb/large/100/356/191/articles/3-tone-trang-diem-ngot-ngao-nu-tuong-2.jpg?v=1558446523483',
        name: 'Liệu trình thư giãn cơ thể cho dân văn phòng cùng Okame',
        description: 'Hãy cùng Louis khám phá nhé! Sữa tắm OKAME Skin Replenishing Body Shower Nếu bạn là tín đồ trung...'
      }, {
        id: '4',
        urlImg: 'http://bizweb.dktcdn.net/thumb/large/100/356/191/articles/serumhuxley3.jpg?v=1558446466887',
        name: 'Liệu trình thư giãn cơ thể cho dân văn phòng cùng Okame',
        description: 'Hãy cùng Louis khám phá nhé! Sữa tắm OKAME Skin Replenishing Body Shower Nếu bạn là tín đồ trung...'
      }
    ];
    constructor() {
    }

}
