import { Component, ViewEncapsulation } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

export interface Animal {
    name: string;
    sound: string;
  }


@Component({
  selector: 'app-checkout-content',
  templateUrl: './checkout-content.component.html',
  styleUrls: ['./checkout-content.component.css', '../../../../mystyle/reponsive.css'],
  encapsulation : ViewEncapsulation.None,
})
export class CheckoutContentComponent {
    animalControl = new FormControl('', [Validators.required]);
    selectFormControl = new FormControl('', Validators.required);
    animals: Animal[] = [
      {name: 'Dog', sound: 'Woof!'},
      {name: 'Cat', sound: 'Meow!'},
      {name: 'Cow', sound: 'Moo!'},
      {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
    ];
    constructor() {
    }

}
