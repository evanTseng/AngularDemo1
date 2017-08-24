import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { DataService } from '../data.service';


@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  @Input()
  data: any;
  error: any;
  userInfo: any;

  constructor( private http: DataService) {
    this.http.post('http://192.168.224.1/Demo1ServerAPI/User/GetUserInfo', null).subscribe(result => {
      console.log( result.json() );
      this.userInfo = result.json();
      this.data = this.userInfo.UserInfo;
  });


    //this.data = this.http.get('http://192.168.100.133/SAIServerAPI/Base/GetSystemTime');
    //console.log(this.data);

    // let data = {};
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });
    // this.http.post('/api/db', data, options)
    // .subscribe(
    // (value: Response) => {
    // this.data = value.json();
    // },
    // (error: any) => {
    // this.error = error;
    // }
    // );
   }

  //  handleSomething() {
  //   this.http.post(url, data).subscribe(result => {
  //       // console.log( result );
  //   });
  // }

   userdata= [
    {
      "id": 1,
      "firstname": "博文",
      "lastname": "柯",
      "email": "aaa@gmail.com",
      "city": "新竹市"
    },
    {
      "id": 2,
      "firstname": "文英",
      "lastname": "蔡",
      "email": "bbb@gmail.com",
      "city": "台北市"
    },
    {
      "id": 3,
      "firstname": "好美",
      "lastname": "林",
      "email": "ccc@gmail.com",
      "city": "高雄市"
    },
    {
      "id": 4,
      "firstname": "是美",
      "lastname": "陳",
      "email": "ddd@gmail.com",
      "city": "台中市"
    },
    {
      "id": 5,
      "firstname": "信哲",
      "lastname": "張",
      "email": "eee@gmail.com",
      "city": "花蓮縣"
    },
    {
      "id": 6,
      "firstname": "好好",
      "lastname": "黃",
      "email": "ttt@gmail.com",
      "city": "屏東縣"
    }
  ];






  ngOnInit() {

    // this.http.get('/api/db.json')
    // .subscribe(
    // (value: Response) => {
    // this.data = value.json();
    // },
    // (error: any) => {
    // this.error = error;
    // }
    // );

  }





}
