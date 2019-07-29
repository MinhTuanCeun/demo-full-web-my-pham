import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../../mystyle/reponsive.css']
})
export class LoginComponent {

    constructor() {
    }

    login(a, b) {
      console.log(a, b);
    }

}
