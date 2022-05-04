import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'angapp-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
 
  @Input() showDetail: boolean = false;
  @Output() toggle = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
