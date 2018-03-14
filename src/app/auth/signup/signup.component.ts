import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'fpa-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.signUpForm = fb.group({
      email: '',
      password: '',
      repeatPassword: ''
    });
  }

  ngOnInit() {
  }
  
  signUp() {
  
  }

}
