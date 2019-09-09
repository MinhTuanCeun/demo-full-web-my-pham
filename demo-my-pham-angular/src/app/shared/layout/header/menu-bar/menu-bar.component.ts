import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { MenuBarService } from 'src/app/core/service/menu-bar.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css', '../../../../../mystyle/reponsive.css']
})
export class MenuBarComponent implements OnInit {

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onShow = new EventEmitter<boolean>();
  menu: any;

  menuBars;

  constructor(private menuBarService: MenuBarService) {
  }

  ngOnInit() {
    this.getCatalogs();
  }

  getCatalogs(): void {
    this.menuBarService.getCatalogs().subscribe(menu => { this.menu = menu; });
  }

  show() {
    this.onShow.emit(false);
  }

}
