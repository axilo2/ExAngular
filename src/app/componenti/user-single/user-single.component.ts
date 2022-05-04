import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'angapp-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {

  buttonContent: string = "Show Details";
  @Input() showDetail: boolean = false;
  @Output() toggle = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }



}
