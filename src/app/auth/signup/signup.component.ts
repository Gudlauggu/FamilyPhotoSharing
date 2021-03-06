import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../shared/auth.service';
import { matchPassword } from '../shared/password-validator';
import { User } from '../shared/user';

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
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['', [Validators.required, matchPassword()]]
    });
  }
  
  ngOnInit() {
  }
  
  signUp() {
    
    const signUpModel = this.signUpForm.value as User;
    this.authService.signup(signUpModel)
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
  
  fcErr(fc: string, error: string, pre?: string[]): boolean {
    if (pre && pre.length > 0) {
      for (let i = 0; i < pre.length; i++) {
        if (this.signUpForm.get(fc).hasError(pre[i])) {
         return false;
        }
      }
    }
    return this.signUpForm.get(fc).hasError(error);
  }
}

