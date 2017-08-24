import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() triggerFather = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

trigger(item: string) {
    this.triggerFather.emit(item);
  }

}
