import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'angapp-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  closeButton: string = "Close Details";

  @Input() showDetail: boolean = false;
  @Output() toggle = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
