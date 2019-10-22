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
}
