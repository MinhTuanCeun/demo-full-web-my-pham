import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../../../mystyle/reponsive.css']
})
export class RegisterComponent implements OnInit {

    protected aFormGroup: FormGroup;
    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
      this.aFormGroup = this.formBuilder.group({
        recaptcha: ['', Validators.required]
      });
    }

    // login(a, b) {
    //   console.log(a, b);
    // }

}
