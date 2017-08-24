import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
//import { UserModuleModule } from '../user-module/user-module.module';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  //userData = new EventEmitter();
  userData: any = {};

  //userData = new UserModuleModule("1", "2", "3", "4", "5");


  constructor(private http: DataService) { }

  ngOnInit() {
  }

  AddUser(userData: any){
    console.log(userData);
    this.http.post('http://192.168.224.1/Demo1ServerAPI/User/AddUserInfo', userData).subscribe(result => {
      //console.log( result.json() );
      // this.userInfo = result.json();
      // this.data = this.userInfo.UserInfo;
  });
  }

}
