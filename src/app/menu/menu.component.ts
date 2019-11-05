import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isMenuOpen = false;
  contentMargin = 240;


  onToolbarMenuToggle() {
    console.log('On toolbar toggled', this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;

    if (!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
  }
  constructor(private _userdata:UserdataService,private _r:Router) { }

  ngOnInit() {
  }
  onLogOut(){
    this._userdata.logout();
    this._r.navigate(['/']);
  }
  isLoggedIn(){
    return this._userdata.isLoggedIn;
  }

}
