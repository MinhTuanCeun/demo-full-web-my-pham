import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../../../mystyle/reponsive.css']
})
export class RegisterComponent implements OnInit {

    aFormGroup: FormGroup;
    constructor(private formBuilder: FormBuilder) {
    }
    siteKey = '6LcCerAUAAAAAOSXOKDrLN5iJFLNE46gChYVpoNd';

    ngOnInit() {
      this.aFormGroup = this.formBuilder.group({
        recaptcha: ['', Validators.required]
      });
    }

    // login(a, b) {
    //   console.log(a, b);
    // }

}
