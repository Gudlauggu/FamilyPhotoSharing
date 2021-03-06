import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from './user';

@Injectable()
export class AuthService {

  constructor(private fireAuth: AngularFireAuth) { }
  
  login(email: string, password: string): Promise<any> {
    return this.fireAuth.auth.signInAndRetrieveDataWithEmailAndPassword(email, password);
  }
  
  logout(): Promise<any> {
    return this.fireAuth.auth.signOut();
  }
  
  signup(user: User): Promise<any> {
    return this.fireAuth.auth
      .createUserAndRetrieveDataWithEmailAndPassword(
        user.email,
        user.password
      );
  }
  
  isAuthenticated(): Observable<boolean> {
    return this.fireAuth.authState
      .map(authstate => {
        return authstate !== null;
      });
  }
}
