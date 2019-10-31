import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GetservService {
  url: string ="https://nodejsapidemo.herokuapp.com/products/";
  constructor(private _http: HttpClient,private _router: Router) {}

  getAllProducts() {
   let x=this._http.get(this.url);
   console.log("X"+x);
    return this._http.get(this.url);
  }


  getProductById(pro_id:number) {
    console.log(pro_id);
    let x=this._http.get(this.url+pro_id);
    console.log(x);
    return this._http.get(this.url+pro_id);
  }

  addProduct(item) {
    let body = JSON.stringify(item);
    let head = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.post(this.url, body, { headers: head });
  }
  editProduct(pro_id,item) {
    let body = JSON.stringify(item);
    let head = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.put(this.url+pro_id, body, { headers: head });
  }
  deleteProduct(pro_id) {
    let head = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.delete(this.url + pro_id, { headers: head });
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
      return;
    }
    this.currentUser = {
      user_email: user_email,
      password: user_password,
      isAdmin: false
    };
  }
  logout() {
    this.currentUser = null;
    this.redirectURL = "";
    this._router.navigate(["/login"]);
  }
  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }
}
