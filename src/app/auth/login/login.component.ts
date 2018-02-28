import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'fpa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.login('gudl0025@easv365.dk', '123456')
      .then(user => console.log(user))
      .catch(error => console.log(error));
  }

}
