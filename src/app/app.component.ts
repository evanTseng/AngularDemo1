import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  title = 'app';
  itemFlag: string;
  counter = 0;
  trigger(item: any) {
    console.log(item);
    this.itemFlag = item;
    this.counter++;
  }







}







