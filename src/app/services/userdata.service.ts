import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  url: string ="https://nodejsapidemo.herokuapp.com/users/";
  constructor(private _http: HttpClient, private _router: Router) {}

  getAllUsers() {
    return this._http.get(this.url);
  }
  currentUser;
  redirectURL: string;
  login(user_email: string, user_password: string) {
    if (user_email == "admin" && user_password == "1234") {
      this.currentUser = {
        user_email: user_email,
        password: user_password,
        isAdmin: true
      };
    }
    // else{
    //   alert("check username and password");
    // }
    this.currentUser = {
      user_email: user_email,
      password: user_password,
      isAdmin: false
    };
  }
  logout() {
    this.currentUser = null;
    this.redirectURL = "";
    this._router.navigate(["/"]);
  }
  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }
}
