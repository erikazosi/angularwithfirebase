import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  public signupForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      fullName: new FormControl('', [<any>Validators.required]),
      email: new FormControl('', [<any>Validators.required]),
      password: new FormControl('', [<any>Validators.required]),
      phone: new FormControl('', [<any>Validators.required])
    });
  }

}
