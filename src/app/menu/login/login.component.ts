import { UserdataService } from './../../services/userdata.service';
import { GetservService } from './../../services/getserv.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, NgForm } from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  constructor(
    private fb: FormBuilder,
    private _userdata: UserdataService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.login = this.fb.group({
      user_email: new FormControl(),
      user_password: new FormControl()
    });
  }
  onLoginSubmit(f:NgForm) {
    console.log(f.value);
    this._userdata.login(
      this.login.value.user_email,
      this.login.value.user_password
    );
    // if (this._userdata.redirectURL) {
    //   this._router.navigateByUrl(this._userdata.redirectURL);
    // } else {
      this._router.navigate(["/dash"]);
    //}
  }
}
