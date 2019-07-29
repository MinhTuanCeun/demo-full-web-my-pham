import { Component } from '@angular/core';


@Component({
  selector: 'app-footer-contact',
  templateUrl: './footer-contact.component.html',
  styleUrls: ['./footer-contact.component.css', '../../../../../mystyle/reponsive.css']
})
export class FooterContactComponent {

    infoCompany = {
      name: 'Evo Mỹ Phẩm',
      address: '15 Ỷ Lan, phường Hiệp Tân, quận Tân Phú',
      phone: '0974423652',
      mail: 'mt.ceun@gmail.com'
    };

    constructor() {
    }

}
