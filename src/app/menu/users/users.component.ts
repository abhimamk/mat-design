import { Component, OnInit } from '@angular/core';
import { User, UserResolved } from 'src/app/classes/user';
import { UserdataService } from 'src/app/services/userdata.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userArr:User[]=[];
  userData:UserResolved;
  errorMessage:String='';
  constructor(private _userdata:UserdataService,private _actroute:ActivatedRoute){
    this.userData= this._actroute.snapshot.data["uData"];
  }

  ngOnInit() {
    this.userArr=this.userData.data;
    this.errorMessage=this.userData.errorMessage;
}

}
