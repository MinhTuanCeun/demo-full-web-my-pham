import { Component } from '@angular/core';
import { MagazineService } from './service/show-magazine.service';


@Component({
  selector: 'app-show-magazine',
  templateUrl: './show-magazine.component.html',
  styleUrls: ['./show-magazine.component.css', '../../../../mystyle/reponsive.css']
})
export class ShowMagazineComponent {

    listmagazine;
    constructor(private magazineService: MagazineService) {
      this.getMagazines();
    }

    getMagazines() {
      this.magazineService.getMagazines().subscribe(result => { this.listmagazine = result; });
    }

}
