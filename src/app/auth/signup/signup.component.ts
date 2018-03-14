import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'fpa-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  signUpForm: FormGroup;
  
  constructor(private fb: FormBuilder,
              private router: Router,
              private snack: MatSnackBar,
              private authService: AuthService) {
    this.signUpForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      repeatPassword: ['', [Validators.required]]
    });
  }
  
  ngOnInit() {
  }
  
  signUp() {
    
    const signUpModel = this.signUpForm.value;
    this.authService.signup(signUpModel.email, signUpModel.password)
      .then(user => {
        this.router.navigateByUrl('albums')
          .then(() => {
            this.snack.open('You are Signed Up', '', {
              duration: 3000
            });
          })
          .catch(error => {
            this.snack.open(error.message, '', {
              duration: 5000
            });
          });
      });
  }
  
  fcErr(fc: string, error: string): boolean {
    return this.signUpForm.get('fc').hasError(error);
  }
}

