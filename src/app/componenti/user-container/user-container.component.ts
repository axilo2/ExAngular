import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angapp-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {

  showDetail: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.showDetail = !this.showDetail;
  }
}
